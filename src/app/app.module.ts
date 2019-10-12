import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './homePage/home.component';
import { UserInfo } from './user/info/user-info.component';
import { UserSettings } from './user/settings/user-settings.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { SignIn } from './signIn/sign-in.component';
import { LogOut } from './logOut/log-out.component';
import { Games } from './games/all/get-games.component';
import { Users } from './users/users.component';
import { CookieService } from 'ngx-cookie-service';



const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'info', component: Games },
    { path: 'users', component: Users },
    { path: 'logout', component: LogOut },
    { path: 'profile', component: UserInfo },
    { path: 'profile/settings', component: UserSettings },
    { path: 'login', component: SignIn},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule ],
    declarations: [ AppComponent, HomeComponent, SignIn, UserSettings,
     NotFoundComponent, UserInfo, Games, Users, LogOut ],
    providers: [ CookieService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }