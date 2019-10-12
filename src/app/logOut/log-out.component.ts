import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';  
import { Router }      from '@angular/router';

@Component({
    selector: 'log-out-app',
    template: '<div></div>',
    // styleUrls: ['./log-out.component.css'],
    // providers: [HttpService]
})
export class LogOut implements OnInit { 

    constructor( private cookieService: CookieService,
        private Router: Router){
    }
      
    ngOnInit(){
         this.cookieService.delete('USER');
         this.cookieService.deleteAll();
         this.Router.navigate(['']);
    }
}