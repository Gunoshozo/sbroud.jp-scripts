import { Component, HostBinding } from "@angular/core";
import { TuiIslandModule } from "@taiga-ui/kit";
import { HeaderControlsComponent } from "../common/header-controls/header-controls.component";
import { FooterControlsComponent } from "../common/footer-controls/footer-controls.component";
import { TuiLinkModule } from "@taiga-ui/core";

@Component({
    selector: 'credits',
    templateUrl: './credits.component.html',
    standalone: true,
    imports:[
        TuiLinkModule,
        TuiIslandModule,
        HeaderControlsComponent,
        FooterControlsComponent
    ]
})
export class CreditsComponent {

    @HostBinding('class') get classes() {
        let res = ['root']
        return res;
    }
}