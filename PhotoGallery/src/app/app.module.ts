import { MaterialModule } from './shared/libraries/material/material.module';
import { DashboardComponent } from './features/gallery/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login/login.component';
import { GalleryListComponent } from './features/gallery/gallery-list/gallery-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PictureCardComponent } from './features/gallery/picture-card/picture-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    DashboardComponent,
    LoginComponent,
    PictureCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
