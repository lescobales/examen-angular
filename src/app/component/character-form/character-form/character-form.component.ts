import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Character} from 'src/app/model/character.model';

@Component({
	selector: 'app-character-form',
	templateUrl: './character-form.component.html',
	styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
	@Input() labelBtn: string = ''
	@Input() title: string = ''
	@Input() updatedCharacter?: Character

	@Output() submittedForm: EventEmitter<Omit<Character, 'id'>> = new EventEmitter<Omit<Character, 'id'>>()

	characterForm!: FormGroup

	constructor(private fb: FormBuilder) {

	}

	ngOnInit() {
		this.characterForm = this.fb.group({
			name: [this.updatedCharacter ? this.updatedCharacter.name : '',
			[Validators.required, Validators.minLength(5), Validators.maxLength(50)]
			],
			status: [this.updatedCharacter ? this.updatedCharacter.status : '',
			[Validators.required]
			],
			species: [this.updatedCharacter ? this.updatedCharacter.species : '',
			[Validators.required]
			],
			type: [this.updatedCharacter ? this.updatedCharacter.type : '',
			[Validators.required]
			],
			gender: [this.updatedCharacter ? this.updatedCharacter.gender : '',
			[Validators.required]
			],

			image: [this.updatedCharacter ? this.updatedCharacter.image : '',
			[Validators.required]
			],
			url: [this.updatedCharacter ? this.updatedCharacter.url : '',
			[Validators.required]]
		})
	}
	onSubmitForm() {
		if (this.characterForm.valid) {

			this.submittedForm.emit(this.characterForm.value)
		}
	}
}
