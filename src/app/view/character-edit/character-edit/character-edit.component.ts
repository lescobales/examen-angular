import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character} from 'src/app/model/character.model';
import {CharacterService} from 'src/app/service/character/character.service';

@Component({
	selector: 'app-character-edit',
	templateUrl: './character-edit.component.html',
	styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit {

	characterToUpdate!: Character

	constructor(private route: ActivatedRoute,
		private characterService: CharacterService,
		private router: Router) {

	}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id')
		if (id) {
			this.characterService.getById(+id)
				.then(character => {
					this.characterToUpdate = character
					if (!this.characterToUpdate) {
						this.router.navigateByUrl('/characters')
					}
				})
		}
	}

	updateCharacter(character: any) {
		this.characterService.update(character)
	}
}
