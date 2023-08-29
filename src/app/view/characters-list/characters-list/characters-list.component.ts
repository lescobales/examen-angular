import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Character, CharacterHttp} from 'src/app/model/character.model';
import {Episode} from 'src/app/model/episode.model';
import {CharacterService} from 'src/app/service/character/character.service';
import {EpisodeService} from 'src/app/service/episode/episode.service';

@Component({
	selector: 'app-characters-list',
	templateUrl: './characters-list.component.html',
	styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
	charactersHttp: CharacterHttp[] = []
	characters: Character[] = []
	info!: {count: number, pages: number, next: string | null, prev: string | null}
	constructor(private characterService: CharacterService,
		private episodeService: EpisodeService,
		private router: Router) {}

	ngOnInit() {
		this.getAll()

	}

	viewDetail(id: number) {
		this.router.navigateByUrl('/characters/' + id)
	}

	getAll(page: number = 1) {
		this.characterService.getAll(page)
			.then((res) => {
				this.charactersHttp = res.results
				this.info = res.info
				this.characters = this.charactersHttp.map(httpChar => Character.fromCharacterHttpToCharacter(httpChar))
				for (let i = 0; i < this.charactersHttp.length; i++) {
					this.episodeService.getEpisodeFromUrls(this.charactersHttp[i].episode)
						.then(epi => {
							this.characters[i].episode = epi
						})

				}
			})
	}

}
