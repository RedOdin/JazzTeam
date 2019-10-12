import { Component, OnInit} from '@angular/core';
import { HttpService} from './get-games.http.service';
import { CookieService } from 'ngx-cookie-service';  
import { GamesDescription } from './gamesDescription';  

@Component({
    selector: 'get-games-app',
    templateUrl: './get-games.component.html',
    styleUrls: ['./get-games.component.css'],
    providers: [HttpService]
})
export class Games implements OnInit { 
   
    i: number = 0;
    games: GamesDescription[] = [];

    constructor(private httpService: HttpService, private cookieService: CookieService){


    }
      
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: any) => {
        	
        	while(this.i < data.games.length)
        	{
        		this.games[this.i] = data.games[this.i];
        		this.i = this.i + 1;
        	}       	
        });
    }
}