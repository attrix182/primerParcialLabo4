import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }


  public getProfileGitHub(){
    return this.http.get('https://api.github.com/users/attrix182')
  }
}
