import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StatedataComponent } from './statedata/statedata.component';
import { TableComponent } from './table/table.component';
import { MapdataComponent } from './mapdata/mapdata.component';
import { StatsComponent } from './stats/stats.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  {path:'',component:InstructionsComponent},
  {path:"india",component:MapdataComponent},
  {path:"stats",component:StatsComponent},
  {path:":name",component:StatedataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
