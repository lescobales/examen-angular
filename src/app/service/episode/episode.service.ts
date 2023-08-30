import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom, map} from 'rxjs';
import {Environment} from 'src/app/environment/environment';
import {Episode, EpisodeHttp} from 'src/app/model/episode.model';

@Injectable({
	providedIn: 'root'
})
export class EpisodeService {
	private baseUrl!: string
	constructor(private http: HttpClient) {
		this.baseUrl = Environment.API_URL
	}

	getEpisodeFromUrls(episodes: Array<string>): Promise<Episode[]> {
		let episodesToString: string = ''
		for (let episode of episodes) {
			if (episode.split('/').length > 0)
				episodesToString = episode.split('/').pop() + ',' + episodesToString
		}
		episodesToString = episodesToString.substring(0, episodesToString.length - 1)
		return firstValueFrom(this.http.get<Episode[]>(this.baseUrl + 'episode/' + episodesToString))
	}
}
