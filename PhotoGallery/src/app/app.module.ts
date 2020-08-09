import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './features/gallery/gallery-list/gallery-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PictureCardComponent } from './features/gallery/picture-card/picture-card.component';
import { MaterialModule } from './shared/libraries/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './features/gallery/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    PictureCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
