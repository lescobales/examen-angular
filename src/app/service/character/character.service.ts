import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {Character, CharacterHttp} from 'src/app/model/character.model';
import {Episode} from 'src/app/model/episode.model';
import {EpisodeService} from '../episode/episode.service';

@Injectable({
	providedIn: 'root'
})
export class CharacterService {
	private baseUrl!: string
	constructor(private http: HttpClient,
		private episodeService: EpisodeService) {
		this.baseUrl = Environment.API_URL
	}

	getAll(page: number = 1): Promise<any> {
		return firstValueFrom(this.http.get<any>(this.baseUrl + 'character/?page=' + page))
	}

	getById(id: number): Promise<Character> {
		return firstValueFrom(this.http.get<CharacterHttp>(this.baseUrl + 'character/' + id)
			.pipe(
				map(res => (Character.fromCharacterHttpToCharacter(res)))
			))
	}
}
