import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character} from 'src/app/model/character.model';
import {CharacterService} from 'src/app/service/character/character.service';

@Component({
	selector: 'app-character-details',
	templateUrl: './character-details.component.html',
	styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
	character?: Character
	constructor(private characterService: CharacterService,
		private router: Router,
		private route: ActivatedRoute) {}

	ngOnInit() {
		const id = this.route.snapshot.paramMap.get('id')
		if (id) {
			this.characterService.getById(+id).then(character => {
				this.character = character
				if (!this.character) {
					this.router.navigateByUrl('/caracters')
				}
			})

		}
	}

}
