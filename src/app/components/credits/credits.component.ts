import { Component, HostBinding } from "@angular/core";

@Component({
    selector: 'credits',
    templateUrl: './credits.component.html'
})
export class CreditsComponent {

    @HostBinding('class') get classes() {
        let res = ['root']
        return res;
    }
}