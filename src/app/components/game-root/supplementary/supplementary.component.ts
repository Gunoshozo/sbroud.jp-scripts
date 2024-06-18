import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { combineLatestWith, forkJoin, switchMap, tap } from 'rxjs';
import { GameNameMapping } from '../../../conts/general.const';
import { GameRootService } from '../game-root.serviece';
import { RestApiService } from '../../../services/rest.service';
import { GameConfig } from '../../../models/reading.models';

@Component({
    selector: 'supplementary',
    templateUrl: './supplementary.component.html'
})
export class SupplementaryPageComponent {
    public text: string = "";
    public constructor(private route: ActivatedRoute, private router: Router, private apiService: RestApiService, private gameRootService: GameRootService) { }

    public ngOnInit(): void {
        const observables = [this.route.paramMap]
        if (!GameNameMapping.mapping) {
            observables.push(this.apiService.get("nameMapping").pipe(tap((file) => {
                GameNameMapping.mapping = file;
            })))
        }

        this.route.parent?.paramMap.pipe(
            combineLatestWith(observables),
            switchMap((params: any) => {
                const gameName = params[0].get('gameName') || ""
                const mediaPage = params[1].get("mediaPage") || ""

                return forkJoin([
                    this.apiService.get("supplementary", {
                        pathParams: { "gameName": gameName, "page": mediaPage }, requestOptions: { responseType: "text" }
                    }).pipe(tap((htmlPage) => {
                        this.text = htmlPage;
                    })),
                    this.apiService.get("gameConfig", { pathParams: { "gameName": gameName } }).pipe(
                        tap((config: GameConfig[]) => {
                            const foundConfig: GameConfig | undefined = config.find((it: GameConfig) => it.link.includes(this.router.url))
                            const header = `${(GameNameMapping.mapping[gameName] && GameNameMapping.mapping[gameName] + ' ') || ''}${foundConfig ? foundConfig.name : 'Something idk??'}`
                            this.gameRootService.pushHeader(header)
                        }))
                ])
            })
        ).subscribe(() => {
        })
    }
}
