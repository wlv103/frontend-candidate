import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() errorMessage: string;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeError(): void {
    this.close.emit();
  }
}