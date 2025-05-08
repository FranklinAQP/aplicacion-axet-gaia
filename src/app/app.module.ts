import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnicalDebtComponent } from './technical-debt/technical-debt.component';
import { RefactoredComponent } from './refactored/refactored.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnicalDebtComponent,
    RefactoredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
