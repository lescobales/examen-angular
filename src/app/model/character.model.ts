import {Episode} from "./episode.model"



export interface Character {
	id: number
	name: string
	status: Character.Status
	species: string
	type: string
	gender: string
	origin: {name: string, url: string}
	location: {name: string, url: string}
	image: string
	episode?: Array<Episode>
	url: string
	created: Date
}

export interface CharacterHttp {
	id: number
	name: string
	status: Character.Status
	species: string
	type: string
	gender: string
	origin: {name: string, url: string}
	location: {name: string, url: string}
	image: string
	episode: Array<string>
	url: string
	created: string
}

export namespace Character {
	export enum Status {
		ALIVE = "Alive",
		DEAD = "Dead",
		UNKNOWN = "unknown"
	}

	export function fromCharacterHttpToCharacter(characterHttp: CharacterHttp): Character {
		let episodes: Episode[] = []

		return {
			id: characterHttp.id,
			name: characterHttp.name,
			status: characterHttp.status,
			species: characterHttp.species,
			type: characterHttp.type,
			gender: characterHttp.gender,
			origin: characterHttp.origin,
			location: characterHttp.location,
			image: characterHttp.image,
			//episode: episodes,
			url: characterHttp.url,
			created: new Date(characterHttp.created)
		}
	}

}
