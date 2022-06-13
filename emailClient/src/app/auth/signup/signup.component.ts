import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPass } from '../validators/match-pass';
import { UniqueUser } from '../validators/unique-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.maxLength(20), 
      Validators.minLength(3), 
      Validators.pattern(/^[a-z0-9]+$/)],
    [this.unique.validate]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  }, {validators: [this.matchPass.validate]});

  constructor(private matchPass: MatchPass, private unique: UniqueUser) { }

  ngOnInit(): void {
  }

}
