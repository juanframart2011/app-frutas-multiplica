import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

	transform( logo: string ): string {
		let logoUrl = "./assets/nba-logo.png"
		
		if( logo ){
			
			logoUrl = logo;
		}
		
		return logoUrl;
	}
}
