import { Component, HostBinding, Inject } from "@angular/core";
import { TuiThemeService, TuiThemeNightService } from "@taiga-ui/addon-doc";
import { TuiBrightness } from "@taiga-ui/core";
import { startWith, map, distinctUntilChanged, share } from "rxjs";

@Component({
    selector: 'footer-controls',
    templateUrl: './footer-controls.component.html'
})
export class FooterControlsComponent {

    @HostBinding('class') get classes() {
		let res = []
		if (this.night.value) {
			res.push('dark')
		}
		return res;
	}

    
	readonly change$ = this.night;

	readonly night$ = this.change$.pipe(
		startWith(null),
		map(() => this.night.value),
		distinctUntilChanged(),
		share()
	);

    constructor(
        @Inject(TuiThemeService) readonly theme: TuiThemeService,
        @Inject(TuiThemeNightService) readonly night: TuiThemeNightService
    ) { }

    @HostBinding('attr.data-mode')
	get mode(): TuiBrightness | null {
		return this.night.value ? 'onDark' : null;
	}
}