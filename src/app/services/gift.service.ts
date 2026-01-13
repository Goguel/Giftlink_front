import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Gift {
  id?: number;
  name: string;
  description: string;
  value: number;
  gifted: boolean;
}

@Injectable({ providedIn: 'root' })
export class GiftService {
  private apiUrl = 'http://localhost:8080/api/gifts'; 

  constructor(private http: HttpClient) {}

  getGifts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGift(gift: Gift): Observable<Gift> {
  return this.http.post<Gift>(this.apiUrl, gift);
  }

  markAsGifted(id: number): Observable<Gift> {
  return this.http.patch<Gift>(`${this.apiUrl}/${id}/gift`, {});
}
}