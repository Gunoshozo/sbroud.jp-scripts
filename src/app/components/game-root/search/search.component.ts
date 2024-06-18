import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs';
import { GlobalLoaderService } from '../../../services/global-loader.service';
import { RestApiService } from '../../../services/rest.service';
import { SearchConfig } from '../../models/search-config.model';
import { GameRootService } from '../game-root.serviece';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

	public gameName: string;

	public _routed: boolean = false;

	public loaded: boolean;

	public routeName: string;

	public constructor(private route: ActivatedRoute,
		private restApi: RestApiService,
		private gameRootService: GameRootService,
		private globalLoader: GlobalLoaderService) {
	}

	public ngOnInit(): void {
		this.gameRootService.pushHeader("Search");

		this.route.parent?.paramMap.pipe(
			tap(() => {
				this.loaded = false;
				this.globalLoader.setGlobalLoader(true);
			}),
			switchMap((res) => {
				this.gameName = res.get("gameName") || ""
				return this.restApi.get("searchConfig",
					{
						pathParams: {
							"gameName": this.gameName
						}
					})
			})
		).subscribe((res: SearchConfig) => {
			this._routed = res.routed;
			this.loaded = true;
		})
	}

}
