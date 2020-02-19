import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './upload/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { UploadComponent } from './upload/upload.component';
import { NewsListComponent } from './upload/news-list/news-list.component';




@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    LoginComponent,
    MainpageComponent,
    DashboardComponent,
    UploadComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainpageComponent },
      { path: 'phone', component: PhoneComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component:LoginComponent}
      
    ]
    ),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
