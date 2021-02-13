import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  userForm: FormGroup;
  password : any
  Phone: any
  email: any
  KeAccount: any
  Name: any
  isSignedIn = false
  constructor(private fb: FormBuilder,private firebaseService:FirebaseService) { 
    this.userForm = this.fb.group({
    //  Name: ['', [Validators.required]],
    //  KeAccount: ['', [Validators.required]],
     email: ['',[Validators.required]],
    //  Phone: ['',[Validators.required]],
     password: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }

  // onSubmit(){
  //   console.log('Data', this.userForm.value)
  // }

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false

  }

}
