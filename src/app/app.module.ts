import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OccupancyDetailComponent } from './occupancy-detail/occupancy-detail.component';
import { FormsModule } from '@angular/forms';
import { OccupancyService } from './occupancy.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OccupancyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [OccupancyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
