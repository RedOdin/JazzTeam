import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
     
  	getData(){

        return this.http.get('data/user-personal-data.json'); 
    }
}