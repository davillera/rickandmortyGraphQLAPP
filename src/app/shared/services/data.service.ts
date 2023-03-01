import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, take, tap } from 'rxjs';
import { Character, dataResponse, Episode } from '../data.interface';


const QUERY = gql`
{
  episodes{
    results{
      name
      episode
    }
  }
  characters {
    results {
      name
      id
      status
      species
      gender
      image
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private episodesSubject = new BehaviorSubject<Episode[]>([]);
  episodes$ = this.episodesSubject.asObservable();

  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.charactersSubject.asObservable();

  constructor(private apollo: Apollo) {
    this.getDataApi();
  }

  private getDataApi(): void {
    this.apollo.watchQuery<dataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {characters, episodes} = data
        this.episodesSubject.next(episodes.results);
        this.charactersSubject.next(characters.results)
      })
    ).subscribe()
  }
}
