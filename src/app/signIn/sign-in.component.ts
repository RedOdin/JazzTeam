import { Component, Input, OnInit }   from '@angular/core';
import { NgForm }      from '@angular/forms';
import { HttpService } from './sign-in.http.service';
import { Router }      from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

  
export class User{
    email: string; 
    password: string;
}
  
@Component({
    selector: 'sign-in-app',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css'],
    providers: [HttpService]
})
export class SignIn implements  OnInit { 

    userData: User = new User();
	user: User = new User();
   	error: string = "Invalid username or password!";
    isError: boolean = false;
    
    ngOnInit(){};

    constructor(private httpService: HttpService, private router: Router, private cookieService: CookieService){}

    onSubmit(){

        this.httpService.getData().subscribe((data: User) => 
        {
            this.userData = data;  
        })

        if(this.user.email === 'Admin' && this.user.password === '12345678')
        {    
            this.cookieService.set('USER', 'Admin');
            this.router.navigate(['profile']);
        }
        else
        {
            this.isError = true;
        }
    }
}