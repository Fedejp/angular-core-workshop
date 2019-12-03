import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from '@workshop/material';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [AppComponent, CustomersComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
