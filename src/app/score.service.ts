import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ScoreService {
	score=0;
	constructor(private _http: Http) { }
	retrieveScore(username, callback){
		this._http.get('https://api.github.com/users/'+username).subscribe( 
			(response)=> { 
				callback(response.json().followers+response.json().public_repos);
			},
			(error)=> {callback(null)}
		);
	}
}
