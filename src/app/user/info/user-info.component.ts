import { Component, Input, OnInit }   from '@angular/core';
import { NgForm }      from '@angular/forms';
import { HttpService } from './user-info.http.service';
import { Router }      from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user-info';


@Component({
    selector: 'user-info-app',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
    providers: [HttpService]
})
export class UserInfo implements  OnInit { 

    user: User = new User;
    date: string = null;
    replenishment: number = 0;

    constructor(private httpService: HttpService, private router: Router, private cookieService: CookieService){}

    // Simulation of data acquisition
    ngOnInit(){

        if (this.cookieService.check('USER'))
        {
            this.httpService.getData().subscribe((data: any) => 
            {
                this.user = data;  
            })
        }
        else
        {
            this.router.navigate(['login']);
        }
    };
}