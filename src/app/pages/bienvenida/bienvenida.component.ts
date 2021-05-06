import { GithubService } from './../../servicios/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  public githubProfile:any;

  constructor(private perfGitHub: GithubService) { }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub(){
    this.perfGitHub.getProfileGitHub().subscribe((data)=>{
      this.githubProfile=data;

    });
  }


}
