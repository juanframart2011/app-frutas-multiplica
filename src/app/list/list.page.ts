import { Component, OnInit } from '@angular/core';
import { Team } from '../interface/team';
import { TeamService } from '../service/team.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

	isLoading:boolean = false;
	teams:Team[] = [];

	constructor( 
		public alertController: AlertController,
		public loadingController: LoadingController,
		private router:Router,
		private teamService:TeamService
	){
		this._showLoading();
	}

	ngOnInit(){

		this.teamService.getList( "standard" )
		.subscribe(
			(result) => {
				if( result.api.status == 200 ){

					this.teams = result.api.teams;
					this.dismiss();
				}
				else{

					this.dismiss();
					this.alertMessage( 'No hay equipos', '', 'No hay equipos' );
				}
			},
			(err) =>{
				console.warn(err);
				this.dismiss();
				this.alertMessage( 'Error Desconocido', '', 'Error Desconocido' );
			},
			() => {

				console.warn('ListPage');
			}
		);
	}

	async alertMessage( messageText:string, subtitle:string, header:string ){
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: header,
		  subHeader: subtitle,
		  message: messageText,
		  buttons: ['OK']
		});
	
		await alert.present();
	
		const { role } = await alert.onDidDismiss();
	}

	async dismiss() {
		this.isLoading = false;
		return await this.loadingController.dismiss().then();
	}

	async _showLoading(){
		this.isLoading = true;
		return await this.loadingController.create({
			cssClass: 'my-custom-class',
			message: 'Cargando Equipos'
		}).then(a => {
			a.present().then(() => {
				if (!this.isLoading) {
					a.dismiss().then();
				}
			});
		});
	}

	detail( teamId:string ){

		this.router.navigate(['/detail/', teamId]);
	}
}