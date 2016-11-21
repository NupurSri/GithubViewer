import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowerComponent } from './profile/follower.component';
import { FollowingComponent } from './profile/following.component';
import { ReposComponent } from './profile/repos.component';


export const routes: Routes = [
	{path: 'home', component: SearchComponent },
	{path: 'viewProfile', component: ProfileComponent },
	{path: 'followerList', component: FollowerComponent },
	{path: 'followingList', component: FollowingComponent },
	{path: 'repoList', component: ReposComponent },
	{ path: '', component: SearchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);