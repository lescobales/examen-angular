import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Character} from 'src/app/model/character.model';
import {CharacterService} from 'src/app/service/character/character.service';

@Component({
	selector: 'app-character-add',
	templateUrl: './character-add.component.html',
	styleUrls: ['./character-add.component.scss']
})
export class CharacterAddComponent {
	constructor(private characterService: CharacterService,
		private router: Router) {

	}

	addCharacter(character: Omit<Character, 'id'>) {
		this.characterService.add(character)
	}

}
