import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Environment} from 'src/app/environment/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	baseUrl: string
	private tokenSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('')
	token$ = this.tokenSubject$.asObservable()

	constructor() {
		this.baseUrl = Environment.API_URL
	}

	get token() {
		return this.tokenSubject$.value
	}
	login(email: string, password: string): Promise<void> {
		return new Promise(
			(resolve, reject) => {
				const usernameDb = 'admin@admin.fr'
				const passwordDb = 'P@ssw0rd2023'

				if (email !== usernameDb) {
					reject('L\'utilisateur n\'existe pas')
					return
				}
				if (password === passwordDb) {
					this.tokenSubject$.next('token')
					resolve()
				} else {
					reject('Mot de passe invalide')
				}
			}
		)
	}

	logout() {
		this.tokenSubject$.next('')
	}
}
