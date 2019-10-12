import { Component, OnInit} from '@angular/core';
import { HttpService} from './users.http.service';
import { CookieService } from 'ngx-cookie-service';  

export class User{
    name: string;
    balance: number;
    dateOfBirth: any;
    country: string;
    city: string;
    phone:string;
    sex: string;
    about: string;
}

@Component({
    selector: 'users-app',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [HttpService]
})
export class Users implements OnInit { 
   

    users: User[] = [];
    usersSettings: string[] = ["Id","Check","E-mail","Name","Phone","Sex","Role","Access"];
    error: any[] = [];
    date: string = null;
    dateTime: any[] = [];
    i: number = 0;

    constructor(private httpService: HttpService, private cookieService: CookieService){


    }
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {
                //this.user=data
                while(this.i < data.rows.length)
                {
                    this.users[this.i] = data.rows[this.i];
                    this.i = this.i + 1;
                }
                console.log(this.users);
            });
            
    };
}