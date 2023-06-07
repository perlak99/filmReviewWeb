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
  @Input() defaultValue: any = undefined;
  @Input() unselectButton: boolean = true;
  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    if (this.defaultValue) {
      this.selectedValue = this.defaultValue;
      this.valueChange.emit(this.selectedValue);
    }
  }

  setValue(selectedValue: number) {
    this.selectedValue = selectedValue;
    this.valueChange.emit(selectedValue);
  }

  unselectValue() {
    this.selectedValue = this.defaultValue;
    this.valueChange.emit(this.selectedValue);
  }
}
