import { Component, HostBinding, Inject } from "@angular/core";
import { TuiThemeService, TuiThemeNightService } from "@taiga-ui/addon-doc";
import { SakuraService } from "../../services/sakura.service";

@Component({
    selector: 'gen-info',
    templateUrl: './general-info.component.html'
})
export class GeneralInfoComponent {

    @HostBinding('class') get classes() {
        return 'root';
    }

    constructor(
        private sakura: SakuraService,
        @Inject(TuiThemeService) readonly theme: TuiThemeService,
        @Inject(TuiThemeNightService) readonly night: TuiThemeNightService) { }


    ngAfterViewInit(): void {
        this.sakura.bindSakura("gen-info")
    }
}