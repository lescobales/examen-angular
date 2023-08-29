import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/service/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	errMsg?: string
	constructor(private authService: AuthService,
		private router: Router) {}

	onSubmitLoginForm(loginForm: NgForm) {
		if (loginForm.valid) {
			this.authService
				.login(loginForm.value.email, loginForm.value.password)
				.then(() => this.router.navigateByUrl('characters'))
				.catch((err) => this.errMsg = err)
		}
	}
}
