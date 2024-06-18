import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule, TuiLinkModule, TuiHintModule, TuiLoaderModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiModeModule, TuiThemeNightModule, TuiLabelModule, TuiSvgModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { RootComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ErrorComponent } from './components/error-page/error.component';
import { HomeComponent } from './components/home-page/home.component';
import { ItemCardComponent } from './components/common/item-card/item-card.component';
import { GameRootComponent } from './components/game-root/game-root.component';
import { RestApiService } from './services/rest.service';
import { TuiAccordionModule, TuiCarouselModule, TuiElasticContainerModule, TuiInputModule, TuiInputNumberModule, TuiIslandModule, TuiSliderModule, TuiToggleModule } from "@taiga-ui/kit";
import { TuiSidebarModule } from "@taiga-ui/addon-mobile";
import { TuiActiveZoneModule } from "@taiga-ui/cdk";
import { TuiCardModule } from '@taiga-ui/experimental';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GameRootService } from "./components/game-root/game-root.serviece";
import { GlobalLoaderService } from "./services/global-loader.service";
import { SettingsComponent } from "./components/settings/settings.component";
import { TuiInputOpacityModule } from "@taiga-ui/addon-doc";
import { ChapterNavigationComponent } from "./components/game-root/chapter-navigation/chapter-navigation.component";
import { NavigationComponent } from "./components/game-root/reading-space/components/navigation/navigation.component";
import { ReadingComponent } from "./components/game-root/reading-space/reading.component";
import { ChapteredItemsComponent } from "./components/game-root/search/chaptered-items/chapter-items.component";
import { RoutedItemsComponent } from "./components/game-root/search/routed-items/routed-items.component";
import { SearchComponent } from "./components/game-root/search/search.component";
import { TipsComponent } from "./components/game-root/tips/tips.component";
import { SupplementaryPageComponent } from "./components/game-root/supplementary/supplementary.component";
import { HeaderControlsComponent } from "./components/common/header-controls/header-controls.component";
import { SakuraService } from "./services/sakura.service";
import { FooterControlsComponent } from "./components/common/footer-controls/footer-controls.component";
import { GeneralInfoComponent } from "./components/general-info/general-info.component";
import { CreditsComponent } from "./components/credits/credits.component";
import { TuiBlockStatusModule } from "@taiga-ui/layout";
import { ReadingLineComponent } from "./components/game-root/reading-space/components/readling-line/reading-line.component";
import { MobileService } from "./services/mobile.service";
import { HelperService } from "./services/helper.service";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        // Taiga ui modules
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiSidebarModule,
        TuiActiveZoneModule,
        TuiElasticContainerModule,
        TuiLinkModule,
        TuiCardModule,
        TuiHintModule,
        TuiLoaderModule,
        TuiAccordionModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiThemeNightModule,
        TuiCarouselModule,
        TuiModeModule,
        TuiToggleModule,
        TuiLabelModule,
        TuiSliderModule,
        TuiInputOpacityModule,
        TuiInputNumberModule,
        TuiSvgModule,
        TuiBlockStatusModule,
        TuiInputModule
    ],
    declarations: [RootComponent,
        HomeComponent,
        ReadingComponent,
        ReadingLineComponent,
        GameRootComponent,
        ChapterNavigationComponent,
        ErrorComponent,
        TipsComponent,
        ItemCardComponent,
        SupplementaryPageComponent,
        NavigationComponent,
        SearchComponent,
        SettingsComponent,
        RoutedItemsComponent,
        ChapteredItemsComponent,
        HeaderControlsComponent,
        FooterControlsComponent, GeneralInfoComponent,
        CreditsComponent
    ],
    exports: [RootComponent,
        HomeComponent,
        ReadingComponent,
        ReadingLineComponent,
        GameRootComponent,
        ChapterNavigationComponent,
        ErrorComponent,
        TipsComponent,
        ItemCardComponent,
        SupplementaryPageComponent,
        NavigationComponent,
        SearchComponent,
        SettingsComponent,
        RoutedItemsComponent,
        ChapteredItemsComponent,
        HeaderControlsComponent,
        FooterControlsComponent, 
        GeneralInfoComponent,
        CreditsComponent
    ],
    bootstrap: [RootComponent],
    providers: [
        RestApiService,
        GameRootService,
        GlobalLoaderService,
        MobileService,
        SakuraService,
        HelperService,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
    ]
})
export class AppModule { }