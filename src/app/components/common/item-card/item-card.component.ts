import { Component, Input, OnInit } from '@angular/core';
import { LinkConsts, LocalStorageVariables, TextConsts } from '../../../conts/general.const';
import { TuiHintModule } from '@taiga-ui/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  standalone: true,
  imports: [TuiHintModule,
    NgIf,
    NgClass,
    RouterLink
  ]
})
export class ItemCardComponent implements OnInit {

  @Input()
  public name: string = "";

  @Input()
  public subName: string = "";

  @Input()
  public link: string = "";

  @Input()
  public imageResource: string = "";

  @Input()
  public spoiler: boolean | undefined = false;

  @Input()
  public hideName: boolean = false;

  @Input()
  public hideTip: boolean = false;

  public hiddenBySpoiler: boolean = false;

  private intialImageResource: string = "";
  private initialName: string = "";


  ngOnInit(): void {
    this.intialImageResource = this.imageResource;
    this.initialName = this.name;

    const hideSpoilersVar = localStorage.getItem(LocalStorageVariables.hideSpoilers);

    if (this.spoiler && (hideSpoilersVar === "true" || !hideSpoilersVar)) {
      this.hiddenBySpoiler = !!this.spoiler;
      this.imageResource = LinkConsts.spoilerImg;
      this.name = TextConsts.spoilerPrompt;
    }
  }

  public toggleSpoiler(event: MouseEvent) {
    event.preventDefault()
    this.hiddenBySpoiler = false;
    this.imageResource = this.intialImageResource;
    this.name = this.initialName;
  }
}
