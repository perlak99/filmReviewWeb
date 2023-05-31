import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() label: string = "";
  @Input() values: any[] = [];
  @Input() selectedValue: any = undefined;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setValue(selectedValue: number) {
    this.selectedValue = selectedValue;
    this.valueChange.emit(selectedValue);
  }
}
