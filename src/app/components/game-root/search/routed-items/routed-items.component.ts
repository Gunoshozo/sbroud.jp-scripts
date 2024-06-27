import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { forkJoin, of, switchMap } from 'rxjs';
import { RouteConfig, RouteItem, ChapterConfig, ChapterNav } from '../../../../models/reading.models';
import { GlobalLoaderService } from '../../../../services/global-loader.service';
import { RestApiService } from '../../../../services/rest.service';
import { SearchableRoute, SearchableChapter } from '../../../models/search-config.model';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameHelper } from '../../../../helpers/name-helper';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiCarouselModule, TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';


@Component({
	selector: 'routed-items',
	templateUrl: './routed-items.component.html',
	standalone: true,
	imports: [
    NgClass,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    TuiCarouselModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
]
})
export class RoutedItemsComponent implements OnInit {

	@Input()
	public gameName: string;

	private _index: number = 0;

	public get index(): number {
		return this._index;
	}

	public set index(val: number) {
		this._index = val;
	}

	public carouselCount: number = Math.ceil(window.innerWidth / 500);

	public searchForm: FormGroup = new FormGroup({
		"search": new FormControl("")
	});

	private timeout: any = null;

	private prevSearchString = "";

	public initialItems: SearchableRoute[];

	public filteredItems: SearchableRoute[];

	constructor(private globalLoaderService: GlobalLoaderService, private restApi: RestApiService, private cdr: ChangeDetectorRef) { }

	ngOnInit(): void {
		this.initControls()
		this.restApi.get("gameRouteConfig", {
			pathParams: {
				"gameName": this.gameName
			}
		}).pipe(
			switchMap((resRouteConfig: RouteConfig) => {
				this.initialItems = resRouteConfig.items.map((item: RouteItem) => {
					return {
						"name": item.name,
						"spoiler": item.spoiler,
						"items": []
					}
				})

				const paths = resRouteConfig.items.map((it) =>
					this.restApi.get("routedGameChapterConfig",
						{
							pathParams: {
								"gameName": this.gameName,
								"routeName": it.routerLink
							}
						})
				)
				return forkJoin(paths).pipe(
					switchMap((chapterConfigs: ChapterConfig[]) => {
						const pathsObj = this.getMappedRouteConfig(chapterConfigs, resRouteConfig)
						return forkJoin(pathsObj)
					})
				)
			})
		).subscribe((it: any) => {
			Object.entries(it).forEach((entry: any, index: number) => {
				this.initialItems[index].items = entry[1]
			});
			this.filteredItems = this.initialItems;

			const ciel = Math.ceil(window.innerWidth / 500);
			this.carouselCount = Math.max(Math.min(ciel, this.filteredItems?.length), 1)

			this.globalLoaderService.setGlobalLoader(false);
		})
	}


	//for each route get texts of each chapter
	private getMappedRouteConfig(chapterConfig: ChapterConfig[], routeConfig: RouteConfig): any {
		const zippedConfigs = routeConfig.items.map((k, i) => [k, chapterConfig[i]]);
		const res1 = zippedConfigs.reduce((a, v) => {
			const routeConf = (<RouteItem>v[0])
			const chapterConf = <ChapterConfig>v[1]

			const routeLink = routeConf.routerLink

			const value = forkJoin(
				//create array for forkJoin
				Array.from({ length: chapterConf.total }).map((_, index) => {
					// iterate by index in range (0, chapterConf.total)
					let fileName = ""
					if (chapterConf.chapterOrder) {
						fileName = chapterConf.chapterOrder[index]
					}
					else {
						fileName = `${index + 1}`
					}
					// get file with text af a chapter
					return this.restApi.get("routedChapterFile",
						{
							pathParams: {
								"gameName": this.gameName,
								"routeName": routeLink,
								"file": `${fileName}.txt`
							},
							requestOptions: {
								headers: new HttpHeaders({
									"Accept": "application/json;charset=utf-8",
								}),
								responseType: 'text'
							}
						})
				}))
				.pipe(
					switchMap((it: string[]) => {
						//create config for each searchable chapter
						let res: SearchableChapter[] = it.map((chapterText: string, index: number) => {

							let key = ""
							let name = ""
							if (chapterConf.chapterOrder) {
								key = chapterConf.chapterOrder[index];
								name = NameHelper.resolveChapterName(chapterConf, index);
							} else {
								key = `${index + 1}`
								name = NameHelper.resolveChapterName(chapterConf, index + 1);
							}
							let fileLink = key
							return {
								"name": name,
								"text": chapterText,
								"routerLink": `../routes/${routeLink}/${fileLink}`
							}
						})
						return of(res)
					})
				)
			return ({ ...a, [routeLink]: value })
		}, {})
		return res1
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		const ciel = Math.ceil(window.innerWidth / 500);
		this.carouselCount = Math.max(Math.min(ciel, this.filteredItems?.length), 1);
	}

	private initControls(): void {
		this.searchForm.controls["search"].valueChanges.subscribe((val: string) => {
			if (val.length > 0) {
				if (this.timeout) {
					clearTimeout(this.timeout)
				}
				this.timeout = setTimeout(() => {
					this.filterChapters(val);
					this.onResize()
					this._index = 0;
				}, 500)
			} else {
				if (this.filteredItems && this.initialItems && this.filteredItems.length != this.initialItems.length) {
					this.filteredItems = this.initialItems;
					this.onResize()
				}
			}
		})
	}

	private filterChapters(searchStr: string) {
		let searchFrom: SearchableRoute[] = []
		if (searchStr.includes(this.prevSearchString)) {
			searchFrom = this.filteredItems;
		} else {
			searchFrom = this.initialItems;
		}

		this.filteredItems = searchFrom.map((it) => {
			const items = it.items.filter((ch) => ch.text.includes(searchStr))
			return {
				items: items,
				name: it.name,
				spoiler: it.spoiler
			}
		}).filter((it) => it.items.length > 0)


		this.prevSearchString = searchStr;
		this.globalLoaderService.setGlobalLoader(false)
	}
}
