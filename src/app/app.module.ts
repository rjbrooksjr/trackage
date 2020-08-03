import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BackgroundComponent } from './background/background.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BackgroundComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
