import { Component, OnInit } from '@angular/core';
import { HttpService} from './users.http.service';
import { CookieService } from 'ngx-cookie-service';  
import { User } from './user';


@Component({
    selector: 'users-app',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [HttpService]
})
export class Users implements OnInit { 
   

    users: User[] = [];
    usersSettings: string[] = ["Id","E-mail","Name","Phone","Sex","Access"];
    i: number = 0;

    constructor(private httpService: HttpService, private cookieService: CookieService){ }
      
    ngOnInit(){
        this.httpService.getData().subscribe((data:any) => {
               
                while(this.i < data.users.length)
                {
                    this.users[this.i] = data.users[this.i];
                    this.i = this.i + 1;
                }
                console.log(this.users);
            });
            
    };
}