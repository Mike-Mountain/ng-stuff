import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@ng-stuff/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  constructor(private http: HttpClient) {
  }

  private setUrl(fragment: string, extra?: unknown): string {
    let url = `${environment.apiUrl}/${fragment}`;
    if (extra) {
      url += `/${extra}`;
    }
    return url;
  }

  public _get<T>(fragment: string, extra?: unknown): Observable<T> {
    const url = this.setUrl(fragment, extra);
    return this.http.get<T>(url);
  }

  public _post<T>(fragment: string, data: T): Observable<T> {
    const url = this.setUrl(fragment);
    return this.http.post<T>(url, data);
  }

  public _put<T>(fragment: string, data: T, extra?: unknown): Observable<T> {
    const url = this.setUrl(fragment, extra);
    return this.http.put<T>(url, data);
  }

  public _delete<T>(fragment: string, extra: unknown): Observable<T> {
    const url = this.setUrl(fragment, extra);
    return this.http.delete<T>(url);
  }
}
