import { PostService } from './chapter9/services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { App4Component } from './chapter4/components/app4/app4.component';
import { CoursesComponent } from './chapter4/components/courses/courses.component';
import { App6Component } from './chapter6/components/app6/app6.component';
import { InputFormatDirective } from './chapter6/directives/input-format.directive';
import { App7Component } from './chapter7/components/app7/app7.component';
import { ContactFormComponent } from './chapter7/components/contact-form/contact-form.component';
import { App8Component } from './chapter8/components/app8/app8.component';
import { SignupFormComponent } from './chapter8/components/signup-form/signup-form.component';
import { NewCourseFormComponent } from './chapter8/components/new-course-form/new-course-form.component';
import { App9Component } from './chapter9/components/app9/app9.component';
import { PostsComponent } from './chapter9/components/posts/posts.component';



const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'chapter-4', component: App4Component },
  { path: 'chapter-6', component: App6Component },
  { path: 'chapter-7', component: App7Component },
  { path: 'chapter-8', component: App8Component },
  { path: 'chapter-9', component: App9Component },
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
    ContactFormComponent,
    App8Component,
    SignupFormComponent,
    NewCourseFormComponent,
    App9Component,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
