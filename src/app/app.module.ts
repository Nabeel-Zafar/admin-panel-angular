import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {LoginComponent}  from './Components/login/login.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddNewUserComponent } from './Components/dashboard/add-new-user/add-new-user.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// import {AngularFireDatabaseModule} from '@angularfire2/database';
import {FirebaseService} from './Services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddNewUserComponent,
    ],
  
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp({
      // apiKey: "AIzaSyDS6GMAPJ20vXP6B0RQmQeRSgnThQXUpj0",
      // authDomain: "smart-bill-pr.firebaseapp.com",
      // projectId: "smart-bill-pr",
      // storageBucket: "smart-bill-pr.appspot.com",
      // messagingSenderId: "35275491819",
      // appId: "1:35275491819:web:ee50e63ddb401a0f8e71ae",
      // measurementId: "G-Z8084S3EQ6"
      apiKey: "AIzaSyCtMFrIZuY6_S7nNIw-PZjK1vmMmV3VMIU",
    authDomain: "smart-bill-predictor.firebaseapp.com",
    databaseURL: "https://smart-bill-predictor-default-rtdb.firebaseio.com",
    projectId: "smart-bill-predictor",
    storageBucket: "smart-bill-predictor.appspot.com",
    messagingSenderId: "776190485566",
    appId: "1:776190485566:web:f6ec2507e6006a6161dd6f",
    measurementId: "G-BM9YQYG568"
    }),
    AngularFireDatabaseModule
  ],

  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
