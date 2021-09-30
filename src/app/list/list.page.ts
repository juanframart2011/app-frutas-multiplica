import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

	constructor( private teamService:TeamService ){}

	ngOnInit(){

		this.teamService.getList( "standard" ).subscribe( result =>{

		});
	}
}