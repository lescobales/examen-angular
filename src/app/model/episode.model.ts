import {Character} from "./character.model"

export interface Episode {
	id: number
	name: string
	air_date: string
	episode: string
	characters?: Array<Character>
	url: string
	created: Date
}

export interface EpisodeHttp {
	id: number
	name: string
	air_date: string
	episode: string
	characters: Array<string>
	url: string
	created: string
}

export namespace Episode {
	export function fromEpisodeHttpToEpisode(episodeHttp: EpisodeHttp): Episode {
		return {
			id: episodeHttp.id,
			name: episodeHttp.name,
			air_date: episodeHttp.air_date,
			episode: episodeHttp.episode,
			//characters: episodeHttp.characters,
			url: episodeHttp.url,
			created: new Date(episodeHttp.created)
		}
	}
}
