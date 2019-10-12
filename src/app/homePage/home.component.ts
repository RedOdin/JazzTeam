import { Component, OnInit} from '@angular/core';
import { HttpService} from './home.http.service';
import { CookieService } from 'ngx-cookie-service';  
import { GamesDescription } from './gamesDescription';  

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HttpService]
})
export class HomeComponent implements OnInit { 
   
    i: number = 0;
    j: number = 3;
    popularGames: GamesDescription[] = [];
    recommendGames: GamesDescription[] = [];

    constructor(private httpService: HttpService, private cookieService: CookieService){}
      
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: any) => {
        
            //Imitation of popular and recommended games
        	while(this.i < 3)
        	{
        		this.popularGames[this.i] = data.games[this.i];
        		this.i = this.i + 1;
        	}

        	while(this.j < 6)
        	{
        		this.recommendGames[this.j - 3] = data.games[this.j];
        		this.j = this.j + 1;
        	}
        	
        });
    }
}