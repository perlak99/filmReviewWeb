import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toastTitle: string;
  @Input() toastMessage: string;
  @Input() countdown: number = 5000;

  showToast: boolean = false;

  show() {
    this.showToast = true;
    setTimeout(() => {
      this.hide();
    }, this.countdown);
  }

  hide() {
    this.showToast = false;
  }
}