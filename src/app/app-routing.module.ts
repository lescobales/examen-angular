import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from './guard/auth/auth.guard';
import {CharacterAddComponent} from './view/character-add/character-add/character-add.component';
import {CharacterDetailsComponent} from './view/character-details/character-details/character-details.component';
import {CharacterEditComponent} from './view/character-edit/character-edit/character-edit.component';
import {CharactersListComponent} from './view/characters-list/characters-list/characters-list.component';
import {LoginComponent} from './view/login/login/login.component';
import {NotFoundComponent} from './view/not-found/not-found/not-found.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'login'},
	{path: 'login', component: LoginComponent},
	{
		path: 'characters', canActivate: [authGuard], children: [
			{path: '', component: CharactersListComponent},
			{path: 'add', component: CharacterAddComponent},
			{
				path: ':id', children: [
					{path: '', component: CharacterDetailsComponent},
					{path: 'edit', component: CharacterEditComponent}
				]
			}
		]
	},
	{path: 'not-found', component: NotFoundComponent},
	{path: '**', redirectTo: 'not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
