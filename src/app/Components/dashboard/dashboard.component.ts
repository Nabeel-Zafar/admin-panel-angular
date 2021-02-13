import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FirebaseService } from 'src/app/Services/firebase.service';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
// import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';
import * as firebase from 'firebase';
import 'firebase/firestore';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['profileImage' ,'name','rights','createdDate' , 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  isSignedIn = false
  users: any[]
  @Output() isLogout = new EventEmitter<void>()
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog,public firebaseService: FirebaseService,public db : AngularFireDatabase ) { 
    
    // db.list('/users').valueChanges().subscribe(users => {  this.users = users; console.log(this.users); }); 
  }

  ngOnInit(): void {
    // this.users = this.db.list('/users').valueChanges();
      // console.log(this.users);
      this.db.list('/users').valueChanges().subscribe(users => {  this.users = users; console.log(this.users); }); 

      this.dataSource = new MatTableDataSource(this.users);
      // this.users.paginator = this.users;
      console.log("this.dataSource",this.dataSource)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.users.filter = filterValue.trim().toLowerCase();
  }

  delete(elm) {
    this.users = this.users.filter(i => i !== elm)
    
  }

  AddNewUser(){
    console.log("AddNewUser");
    const dialogRef = this.dialog.open(AddNewUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  handleLogout(){
    this.isSignedIn = false

  }
}

export interface PeriodicElement {
  profileImage:string;
  name: string;
  createdDate:string;
  rights:string;
  // role: string;
}