import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conferenceColor'
})
export class ConferenceColorPipe implements PipeTransform {

	transform(): string {
		let color = [
			"primary","secondary","tertiary","success","warning","danger","light","medium","dark"
		];

		return color[Math.floor(Math.random()*color.length)];
	}
}