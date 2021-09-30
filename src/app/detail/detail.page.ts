import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Team } from '../interface/team';
import { TeamService } from '../service/team.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	isLoading:boolean = false;
	isLoadingTeam:boolean = false;
	team:Team = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		public alertController: AlertController,
		public loadingController: LoadingController,
		private router:Router,
		private teamService:TeamService
	){}

	ngOnInit() {}

	ionViewDidEnter(){
		this._showLoading();
		this.isLoadingTeam = false;
		let teamId = this.activatedRoute.snapshot.paramMap.get( 'teamId' );
		this._goDetailTeam( teamId );
	}

	_goDetailTeam( teamId:string ){
		
		this.teamService.detail( teamId )
		.subscribe(
			(result) => {
				if( result.api.status == 200 ){

					this.team = result.api.teams[0];
					this.isLoadingTeam = true;
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

				console.warn('_goDetailTeam');
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
			message: 'Cargando Equipo'
		}).then(a => {
			a.present().then(() => {
				if (!this.isLoading) {
					a.dismiss().then();
				}
			});
		});
	}
}