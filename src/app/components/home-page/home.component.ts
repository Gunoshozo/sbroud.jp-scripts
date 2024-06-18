import { Component, HostBinding, OnInit } from '@angular/core';
import { GameItem } from '../../models/reading.models';
import { RestApiService } from '../../services/rest.service';
import { SakuraService } from '../../services/sakura.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @HostBinding('class') get classes() {
    return 'root';
  }

  constructor(private sakura: SakuraService,
    private apiService: RestApiService) { }

  public gameItems: GameItem[] = [];

  ngOnInit(): void {
    this.sakura.bindSakura("home")

    this.apiService.get("gamesListConfig").subscribe((games: any) => {
      this.gameItems = (<any[]>games).map((game) => {
        return <GameItem>{
          routerLink: game.link,
          name: game.name,
          imgSrc: game.logo
        }
      })
    })
  }
}