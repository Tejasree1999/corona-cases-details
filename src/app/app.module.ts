import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgService } from './img.service';
import { TableComponent } from './table/table.component';
import { StatedataComponent } from './statedata/statedata.component';
import { MapdataComponent } from './mapdata/mapdata.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './stats/stats.component';
import { InstructionsComponent } from './instructions/instructions.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StatedataComponent,
    MapdataComponent,
    HeaderComponent,
    StatsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
