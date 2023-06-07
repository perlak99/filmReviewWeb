import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  animations: [
    trigger('foldBody', [
      state('folded', style({ height: '0', paddingTop: '0', paddingBottom: '0' })),
      state('unfolded', style({ height: '*', paddingTop: '*', paddingBottom: '*' })),
      transition('folded <=> unfolded', animate('200ms ease-in-out')),
    ]),
  ]
})
export class CollapsibleComponent implements OnInit {
  @Input()
  headerText: string = 'Filters';

  @Input()
  isFolded: boolean = true;

  @Input()
  headerStyles: string = '';

  @Input()
  bodyStyles: string = '';

  toggleBody() {
    this.isFolded = !this.isFolded;
  }

  constructor() { }

  ngOnInit(): void {
  }

}


