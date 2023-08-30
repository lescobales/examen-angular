import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './view/login/login/login.component';
import {CharactersListComponent} from './view/characters-list/characters-list/characters-list.component';
import {CharacterDetailsComponent} from './view/character-details/character-details/character-details.component';
import {HeaderComponent} from './component/header/header/header.component';
import {CharacterCardComponent} from './component/card/character-card/character-card.component';
import {PaginatorComponent} from './component/paginator/paginator/paginator.component';
import {CharacterEditComponent} from './view/character-edit/character-edit/character-edit.component';
import {CharacterAddComponent} from './view/character-add/character-add/character-add.component';
import {CharacterFormComponent} from './component/character-form/character-form/character-form.component';
import {NotFoundComponent} from './view/not-found/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchBarComponent} from './component/search-bar/search-bar/search-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CharactersListComponent,
		CharacterDetailsComponent,
		HeaderComponent,
		CharacterCardComponent,
		PaginatorComponent,
		CharacterEditComponent,
		CharacterAddComponent,
		CharacterFormComponent,
		NotFoundComponent,
		SearchBarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
