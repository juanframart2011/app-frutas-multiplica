import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

	constructor( private http: HttpClient ){}

	detail( teamId:string ): Observable<any>{

		let headers = new HttpHeaders({
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    		'x-rapidapi-key': 'ae0e3031c3mshd534ace4ecb18a6p15eee1jsn24411920a6f6'
        });
		
		return this.http.get( environment.apiUrl + "teams/teamId/" + teamId, { headers } );
	}

	getList( league:string ): Observable<any>{
		
		let headers = new HttpHeaders({
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
    		'x-rapidapi-key': 'ae0e3031c3mshd534ace4ecb18a6p15eee1jsn24411920a6f6'
        });
		
		return this.http.get( environment.apiUrl + "teams/league/" + league, { headers } );
	}
}