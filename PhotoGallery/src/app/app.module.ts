import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './features/gallery/gallery-list/gallery-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PictureCardComponent } from './features/gallery/picture-card/picture-card.component';
import { MaterialModule } from './shared/libraries/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    PictureCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
