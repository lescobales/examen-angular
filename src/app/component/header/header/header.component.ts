import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, map} from 'rxjs';
import {AuthService} from 'src/app/service/auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	isConnected$!: Observable<boolean>

	constructor(private authService: AuthService,
		private router: Router) {}

	ngOnInit() {
		this.isConnected$ =
			this.authService.token$
				.pipe(
					map(token => Boolean(token))
				)
	}

	onLogoutClick() {
		this.authService.logout()
		this.router.navigateByUrl('/login')
	}
}
