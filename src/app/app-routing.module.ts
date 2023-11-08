import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './components/two/two.component';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
  {path:'',redirectTo:"one",pathMatch:'full'},
  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
