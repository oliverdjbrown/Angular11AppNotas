import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() loginStatus = new EventEmitter<boolean>();

  Login(){
    this.loginStatus.emit(true);
    this.router.navigate(['/notas']);
  }

  ngOnInit(): void {
  }

}
