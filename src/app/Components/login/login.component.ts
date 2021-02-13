import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/Services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  formBuilder: any;
  isSignedIn = false

  constructor(private fb: FormBuilder, private firebaseService:FirebaseService, private router: Router) { 
    this.loginForm = this.fb.group({
      login_id: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
   if(localStorage.getItem('user')!== null)
   { this.isSignedIn= true}
    else
    {this.isSignedIn = false}
  }

  // onSignin(){
  //   console.log('Answer', this.loginForm.value)
  // }

  async onSignin(email:string,password:string ,$myParam: string = ''){
    if (email !== "" && password !== "" ){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    // this.isSignedIn = true
    // goToVotes($myParam: string = ''): void {
      if(this.isSignedIn = true){
        const navigationDetails: string[] = ['/dashboard'];
      if($myParam.length) {
        navigationDetails.push($myParam);
      }
      this.router.navigate(navigationDetails);
      }
      
    // }
    }
    else{
      window.alert("Please enter credentials!")
    }
  }

}
