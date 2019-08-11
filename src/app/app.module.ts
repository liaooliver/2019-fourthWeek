import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { WayComponent } from './components/way/way.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FinishedComponent } from './components/finished/finished.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    WayComponent,
    ProgressComponent,
    PaymentComponent,
    FinishedComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
