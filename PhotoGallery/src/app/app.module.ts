import { FormComponent } from './features/registerForm/register-form/form.component';
import { UserService } from './shared/service/user.service';
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
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './features/registerForm/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    MessagesComponent,
    DashboardComponent,
    MenuComponent,
    PictureSearchComponent,
    LikeComponent,
    LoginComponent,
    FormComponent,
    LoginFormComponent

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
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,




  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
