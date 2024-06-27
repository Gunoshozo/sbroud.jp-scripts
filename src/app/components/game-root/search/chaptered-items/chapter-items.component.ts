import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { switchMap, forkJoin, Observable } from 'rxjs';
import { ChapterConfig } from '../../../../models/reading.models';
import { GlobalLoaderService } from '../../../../services/global-loader.service';
import { RestApiService } from '../../../../services/rest.service';
import { SearchableChapter } from '../../../models/search-config.model';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';

import { RouterLink } from '@angular/router';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { NameHelper } from '../../../../helpers/name-helper';

@Component({
	selector: 'chapters-items',
	templateUrl: './chapter-items.component.html',
	standalone: true,
	imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    RouterLink
]
})
export class ChapteredItemsComponent implements OnInit {

	@Input()
	public gameName: string;

	public filteredItems: SearchableChapter[] = [];

	public searchForm: FormGroup = new FormGroup({
		"search": new FormControl("")
	});

	private timeout: any = null;

	private initialItems: SearchableChapter[] = [];

	private prevSearchString = "";

	constructor(private globalLoaderService: GlobalLoaderService, private restApi: RestApiService) { }

	ngOnInit(): void {
		this.initControls();
		this.restApi.get("nonRoutedGameChapterConfig", {
			pathParams: {
				"gameName": this.gameName
			}
		}).pipe(
			switchMap((resChapterConfig: ChapterConfig) => {
				let count = resChapterConfig.total;
				const named = Object.values(resChapterConfig.chapters).some((item) => !!item.name);
				let observables: Observable<string>[] = [];
				this.initialItems = new Array(count);
				for (let index = 0; index < count; index++) {
					this.initialItems[index] = <SearchableChapter>{};
					let key : string;
					let name: string;
					if (resChapterConfig.chapterOrder) {
						key = resChapterConfig.chapterOrder[index];
						name = NameHelper.resolveChapterName(resChapterConfig, index);
					} else {
						key = `${index + 1}`
						name = NameHelper.resolveChapterName(resChapterConfig, index + 1);
					}

					this.initialItems[index].name = name;
					this.initialItems[index].routerLink = `../chapters/${key}`

					observables.push(this.restApi.get("nonRoutedChapterFile", {
						pathParams: { "gameName": this.gameName, "file": `${key}.txt` },
						requestOptions: {
							headers: new HttpHeaders({
								"Accept": "application/json;charset=utf-8"
							}),
							responseType: 'text'
						}
					}));
				}

				return forkJoin(observables);
			})
		).subscribe((it: string[]) => {
			it.forEach((v, i) => {
				this.initialItems[i].text = v;
			});
			this.filteredItems = this.initialItems;
			this.globalLoaderService.setGlobalLoader(false);
		})
	}

	private initControls(): void {
		this.searchForm.controls["search"].valueChanges.subscribe((val: string) => {
			if (val?.length > 0) {
				if (this.timeout) {
					clearTimeout(this.timeout)
				}
				this.timeout = setTimeout(() => {
					this.filterChapters(val);
				}, 500);
			} else {
				if (this.filteredItems.length != this.initialItems.length) {
					this.filteredItems = this.initialItems;
				}
			}
		})
	}

	private filterChapters(searchStr: string) {
		let searchFrom = [];
		if (searchStr.includes(this.prevSearchString)) {
			searchFrom = this.filteredItems;
		} else {
			searchFrom = this.initialItems;
		}

		this.filteredItems = searchFrom?.filter((item) => {
			return item.text.includes(searchStr);
		})

		this.prevSearchString = searchStr;
	}
}
