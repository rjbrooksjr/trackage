import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { TrackingEditComponent } from './tracking-edit/tracking-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DeleteConfirmComponent,
    TrackingEditComponent,
    HelpComponent,
    ManualEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
