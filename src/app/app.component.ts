import { Component, DoCheck} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient} from '@angular/common/http';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck { 

	name: string = "UserName";
    signin: boolean = false;

    constructor(private cookieService: CookieService, private http: HttpClient){};
    
    ngDoCheck() {
       
        if(this.cookieService.check('USER') && !this.signin)
        {
        	this.name = this.cookieService.get('USER');
        	this.signin = true;
        }
        if(!this.cookieService.check('USER') && this.signin)
        {
        	this.signin = false;
        }
    }

}