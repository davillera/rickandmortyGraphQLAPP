export interface dataResponse{
  characters: APIresponse<Character[]>;
  episodes: APIresponse<Episode[]>;
}

export interface APIresponse<T>{
  results: T
}

export interface Episode{
  name: string;
  episode: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  isFavorite?: boolean;
}
