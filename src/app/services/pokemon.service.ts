import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'http://127.0.0.1:8000/api/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  createPokemon(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  updatePokemon(id: number, formData: FormData): Observable<any> {
    formData.append('_method', 'PUT');
    return this.http.post<any>(`${this.apiUrl}/${id}`, formData);
  }

  deletePokemon(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
