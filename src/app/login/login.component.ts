import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  email:AbstractControl;
  password:AbstractControl;

  constructor(public afAuth: AngularFireAuth,
   public fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email:[null],
      password:[null]
    });
    this.email=this.form.controls['email'];
    this.password=this.form.controls['password'];
  }
    signInWidthEmail(f:any){
      if(this.form.valid){
        this.afAuth.auth.signInWithEmailAndPassword(f.email,f.password)
        .then(()=>alert('Success'))
        .catch(error=>alert(error));
        
      }
    }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}


