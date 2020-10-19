import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SapientViewComponent } from './sapient-view/sapient-view.component';
import { SapientViewService } from './sapient-view/sapient-view.service';

@NgModule({
  declarations: [
    AppComponent,
    SapientViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SapientViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
