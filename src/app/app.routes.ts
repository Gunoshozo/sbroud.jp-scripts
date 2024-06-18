import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error-page/error.component';
import { HomeComponent } from './components/home-page/home.component';
import { GameRootComponent } from './components/game-root/game-root.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChapterNavigationComponent } from './components/game-root/chapter-navigation/chapter-navigation.component';
import { ReadingComponent } from './components/game-root/reading-space/reading.component';
import { SearchComponent } from './components/game-root/search/search.component';
import { TipsComponent } from './components/game-root/tips/tips.component';
import { SupplementaryPageComponent } from './components/game-root/supplementary/supplementary.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { CreditsComponent } from './components/credits/credits.component';

export const gameRoutes: Routes = [
    {
        path: 'tips', component: TipsComponent,
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'chapters', component: ChapterNavigationComponent
    },
    {
        path: 'chapters/:chapterNumber', component: ReadingComponent
    },
    {
        path: 'routes', component: ChapterNavigationComponent
    },
    {
        path: 'routes/:routeName', component: ChapterNavigationComponent
    },
    {
        path: 'routes/:routeName/:chapterNumber', component: ReadingComponent
    },
    {
        path: ':mediaPage', component: SupplementaryPageComponent
    }
]


export const routes: Routes = [
    {
        path: '', redirectTo: 'games', pathMatch: 'full'
    },
    {
        path: 'settings', component: SettingsComponent
    },
    {
        path: 'info', component: GeneralInfoComponent
    },
    {
        path: 'credits', component: CreditsComponent
    },
    {
        path: 'games', component: HomeComponent,
    },
    {
        path: 'games/:gameName', redirectTo: 'games/:gameName/routes', pathMatch: 'full'
    },
    {
        path: 'games/:gameName',
        component: GameRootComponent,
        children: gameRoutes
    },
    {
        path: '404',
        component: ErrorComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }

];
