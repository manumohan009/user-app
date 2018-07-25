import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { App4Component } from './chapter4/components/app4/app4.component';
import { CoursesComponent } from './chapter4/components/courses/courses.component';
import { App6Component } from './chapter6/components/app6/app6.component';
import { InputFormatDirective } from './chapter6/directives/input-format.directive';
import { App7Component } from './chapter7/components/app7/app7.component';
import { ContactFormComponent } from './chapter7/components/contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'chapter-4', component: App4Component },
  { path: 'chapter-6', component: App6Component },
  { path: 'chapter-7', component: App7Component },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    App4Component,
    CoursesComponent,
    App6Component,
    InputFormatDirective,
    App7Component,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
