import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { ResumeInformationComponent } from './resume-information/resume-information.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BioDetailsComponent,
    ResumeInformationComponent,
    FirstScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
