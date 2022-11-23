import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { FeatureListTestComponent } from './components/feature-list-test/feature-list-test.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { TabSectionComponent } from './components/tab-section/tab-section.component';
import { MessageSectionComponent } from './components/message-section/message-section.component';
import { MessageInputComponent } from './components/message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FeaturesListComponent,
    FeatureListTestComponent,
    GroupListComponent,
    TabSectionComponent,
    MessageSectionComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
