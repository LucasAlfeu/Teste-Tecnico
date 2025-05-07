import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostraNoticiaService {
  private url = "https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
