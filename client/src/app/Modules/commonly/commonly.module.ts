import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CommonlyRoutingModule } from './commonly-routing.module';
import { CardComponent } from './components/card/card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CardComponent, DialogComponent, ImageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonlyRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [CardComponent, DialogComponent, ImageComponent, MatButtonModule],
})
export class CommonlyModule {}
