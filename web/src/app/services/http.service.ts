import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/games';
import { APIResponse } from '../models/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(
    ordering: string,
    search?: string,
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(
      `${environment.RAPID_API_BASE_URL}/games`,
      {
        params: params,
      },
    );
  }

  getGameDetails(id: string): Observable<Game> {
    return this.http.get<Game>(`${environment.RAPID_API_BASE_URL}/games/${id}`);
  }
}
