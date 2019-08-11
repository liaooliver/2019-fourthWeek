import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { WayComponent } from './components/way/way.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FinishedComponent } from './components/finished/finished.component'; 

const routes: Routes = [
  { path:'', redirectTo:'/basic', pathMatch: 'full'},
  { path: 'basic', component: BasicComponent },
  { path: 'way', component: WayComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'finish', component: FinishedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
