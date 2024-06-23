import { Component, HostBinding, OnInit } from "@angular/core";
import { TuiIslandModule } from "@taiga-ui/kit";
import { HeaderControlsComponent } from "../common/header-controls/header-controls.component";
import { FooterControlsComponent } from "../common/footer-controls/footer-controls.component";
import { TuiLinkModule } from "@taiga-ui/core";
import { SakuraService } from "../../services/sakura.service";

@Component({
    selector: 'credits',
    templateUrl: './credits.component.html',
    standalone: true,
    imports: [
        TuiLinkModule,
        TuiIslandModule,
        HeaderControlsComponent,
        FooterControlsComponent
    ]
})
export class CreditsComponent implements OnInit {

    @HostBinding('class') get classes() {
        let res = ['root']
        return res;
    }

    constructor(private sakuraService: SakuraService) { }


    ngOnInit() {
        this.sakuraService.bindSakura('credits');
    }
}
