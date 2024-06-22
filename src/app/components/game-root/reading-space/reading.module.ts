import { NgModule } from "@angular/core";
import { TUI_SANITIZER, TuiButtonModule, TuiHintModule, TuiLinkModule } from "@taiga-ui/core";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { GlobalLoaderService } from "../../../services/global-loader.service";
import { RestApiService } from "../../../services/rest.service";
import { SakuraService } from "../../../services/sakura.service";
import { GameRootService } from "../game-root.serviece";
import { TuiElasticContainerModule, TuiIslandModule } from "@taiga-ui/kit";
import { ReadingComponent } from "./reading.component";
import { ReadingLineComponent } from "./components/readling-line/reading-line.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'chapters/:chapterNumber',
        component: ReadingComponent
    },
    {
        path: 'routes/:routeName/:chapterNumber', 
        component: ReadingComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        TuiElasticContainerModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiHintModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ReadingComponent,
        ReadingLineComponent,
        NavigationComponent
    ],
    exports: [
        ReadingComponent,
        ReadingLineComponent,
        NavigationComponent
    ],
    providers: [
        RestApiService,
        GameRootService,
        GlobalLoaderService,
        SakuraService,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
    ]
})
export class ReadingModule { }