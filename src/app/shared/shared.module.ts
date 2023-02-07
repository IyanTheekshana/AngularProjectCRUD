import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirectve } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirectve,
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirectve,
    CommonModule,
  ],
  providers: [LoggingService],
})
export class SharedModule {}
