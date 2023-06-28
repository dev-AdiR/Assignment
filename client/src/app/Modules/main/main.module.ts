import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { CompoundListComponent } from './Components/compound-list/compound-list.component';
import { CommonlyModule } from '../commonly/commonly.module';
import { CompoundService } from './Service/compound.service';
import { CompoundDetailComponent } from './Components/compound-detail/compound-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [CompoundListComponent, CompoundDetailComponent],
  providers: [CompoundService],
  imports: [
    CommonModule,
    MainRoutingModule,
    CommonlyModule,
    HttpClientModule,
    MatDialogModule
  ],
})
export class MainModule {}
