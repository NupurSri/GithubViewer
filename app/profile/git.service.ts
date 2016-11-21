import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { GitUser } from './gitUser';

@Injectable()
export class GitService{

	private _url: string = "https://api.github.com/users/";
	constructor(private _http: Http){}


	getUserDetails(userName){
		return this._http.get(this._url+userName)
		//return this._http.get('./app/data/user.json')
		.map((response: Response) => response.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getFollowersList(login){
		return this._http.get(this._url+login+'/followers')
		//return this._http.get('./app/data/follower.json')
		.map((response: Response) => response.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getFollowingList(login){
		return this._http.get(this._url+login+'/following')
		//return this._http.get('./app/data/following.json')
		.map((response: Response) => response.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getRepoDetails(login){
		return this._http.get(this._url+login+'/repos')
		//return this._http.get('./app/data/repos.json')
		.map((response: Response) => response.json())
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	/* Method to make syncronous call to get followers and get details of individual follower*/
	getfullFollowersDetails(login:string) {
  	return this._http.get(this._url+login+'/followers').map(res => res.json())
  	//return this._http.get('./app/data/follower.json').map(res => res.json())
  	.flatMap((followers) => {
        	return Observable.forkJoin(followers.map((follower) => {
           return this._http.get(this._url+follower.login).map(res => res.json());
            //return this._http.get('./app/data/user.json').map(res => res.json());
          }));
          })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

	/* Method to make syncronous call to get following list and get details of individual following*/
	getfullFollowingDetails(login:string) {
	return this._http.get(this._url+login+'/following').map(res => res.json())
  	//return this._http.get('./app/data/following.json').map(res => res.json())
  	.flatMap((followings) => {
        	return Observable.forkJoin(followings.map((following) => {
            return this._http.get(this._url+following.login).map(res => res.json());
           // return this._http.get('./app/data/user.json').map(res => res.json());
          }));
          })
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}