import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageTwoComponent } from './page-two/page-two.component';

const appRoutes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'page-2', component: PageTwoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageTwoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
