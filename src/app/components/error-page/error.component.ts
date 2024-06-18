import { AfterViewInit, Component, HostBinding } from "@angular/core";
import { SakuraService } from "../../services/sakura.service";

@Component({
  selector: 'error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements AfterViewInit {

  @HostBinding('class') get classes() {
    return 'root';
  }

  constructor(private sakura: SakuraService) { }

  ngAfterViewInit(): void {
    this.sakura.bindSakura("error")
  }
}