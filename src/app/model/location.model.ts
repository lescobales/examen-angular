export interface Location {
	id: number
	name: string
	type: string
	dimension: string
	residents: Array<string>
	url: string
	created: Date
}

export interface LocationHttp {
	id: number
	name: string
	type: string
	dimension: string
	residents: Array<string>
	url: string
	created: string
}

export namespace Location {
	export function fromLocationHttpToLocation(locationHttp: LocationHttp): Location {
		return {
			id: locationHttp.id,
			name: locationHttp.name,
			type: locationHttp.type,
			dimension: locationHttp.dimension,
			residents: locationHttp.residents,
			url: locationHttp.url,
			created: new Date(locationHttp.created)
		}
	}
}
