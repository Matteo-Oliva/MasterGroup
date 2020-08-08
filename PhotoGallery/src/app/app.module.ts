import { MaterialModule } from './shared/material/material.module';
import { InMemoryDataService } from './features/shared/services/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './features/gallery/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './features/gallery/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MessagesComponent } from './features/messages/messages.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MenuComponent } from './features/menu/menu.component';
import { PictureSearchComponent } from './features/picture-search/picture-search.component';
import { LikeComponent } from './features/gallery/like/like.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    MessagesComponent,
    DashboardComponent,
    MenuComponent,
    PictureSearchComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
