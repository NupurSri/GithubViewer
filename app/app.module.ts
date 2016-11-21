import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.router';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FollowerComponent } from './profile/follower.component';
import { HeaderComponent } from './profile/header.component';
import { FollowingComponent } from './profile/following.component';
import { ReposComponent } from './profile/repos.component';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterRepos } from './profile/repo.pipe';



@NgModule({
	imports: [BrowserModule, routing, FormsModule, HttpModule],
	declarations: [AppComponent,FilterRepos, SearchComponent, ProfileComponent, FollowerComponent, HeaderComponent, FollowingComponent, ReposComponent],
	bootstrap: [AppComponent]
})

export class AppModule{

}