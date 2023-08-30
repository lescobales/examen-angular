import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {Character, CharacterHttp} from 'src/app/model/character.model';
import {SearchService} from '../search/search.service';

@Injectable({
	providedIn: 'root'
})
export class CharacterService {
	private baseUrl!: string
	searchValue!: string
	characterSubject$: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([])
	character$ = this.characterSubject$.asObservable()
	constructor(private http: HttpClient,
		private searchService: SearchService) {
		this.baseUrl = Environment.API_URL
		this.searchService.value$.subscribe(value => {
			this.searchValue = value
			this.getAll().then(response => this.characterSubject$.next(response.results))
		})
	}

	getAll(page: number = 1, name: string = ''): Promise<{results: Character[], info: {count: number, pages: number, next: string | null, prev: string | null}, episode: any}> {
		if (!this.searchValue && !name) {
			return firstValueFrom(this.http.get<{results: CharacterHttp[], info: {count: number, pages: number, next: string | null, prev: string | null}, episode: any}>(this.baseUrl + 'character/?page=' + page)
				.pipe(

					map(res => {

						return ({
							episode: res,
							results: res.results.map(httpChar => Character.fromCharacterHttpToCharacter(httpChar)),
							info: res.info
						})
					})
				))
		} else {
			let search = this.searchValue ? this.searchValue : name
			console.log(search)
			return firstValueFrom(this.http.get<{results: CharacterHttp[], info: {count: number, pages: number, next: string | null, prev: string | null}, episode: any}>(this.baseUrl + 'character/?page=' + page + '&name=' + search)
				.pipe(

					map(res => {

						return ({
							episode: res,
							results: res.results.map(httpChar => Character.fromCharacterHttpToCharacter(httpChar)),
							info: res.info
						})
					})
				))
		}
	}

	getById(id: number): Promise<Character> {
		return firstValueFrom(this.http.get<CharacterHttp>(this.baseUrl + 'character/' + id)
			.pipe(
				map(res => (Character.fromCharacterHttpToCharacter(res)))
			))
	}

	update(character: Character) {
		console.log('Le personnage ' + character.name + ' a été mise à jour (PATCH)')
		console.log(character)
	}

	add(character: Omit<Character, 'id'>) {
		console.log('Le personnage ' + character.name + ' a été ajouté (POST)')
		console.log(character)

	}

	remove(id: number) {
		console.log('Le personnage avec l\'identifiant ' + id + ' a été supprimé (DELETE)')

	}
}
