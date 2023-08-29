import {Component, Input, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {Character} from 'src/app/model/character.model';

@Component({
	selector: 'app-character-card',
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnChanges {

	@Input() character!: Character
	ngOnChanges() {
	}
}
