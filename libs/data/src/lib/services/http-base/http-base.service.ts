import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@ng-stuff/config';
import { Observable } from 'rxjs';
import { EntityStore } from '@datorama/akita';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService<S extends EntityStore> {
  constructor(
    protected http: HttpClient,
    @Inject(EntityStore) private store: S
  ) {}

  private setUrl(fragment: string, extra?: unknown): string {
    let url = `${environment.apiUrl}/${fragment}`;
    if (extra) {
      url += `/${extra}`;
    }
    return url;
  }

  public _get<T>(fragment: string, extra?: unknown): Observable<T[]> {
    const url = this.setUrl(fragment, extra);
    return this.http.get<T[]>(url).pipe(
      tap((entities) => {
        this.store.set(entities);
      })
    );
  }

  public _post<T>(fragment: string, data: T): Observable<T> {
    const url = this.setUrl(fragment);
    return this.http.post<T>(url, data).pipe(
      tap((entity) => {
        this.store.add(entity);
      })
    );
  }

  public _put<T>(fragment: string, data: T, extra?: unknown): Observable<T> {
    const url = this.setUrl(fragment, extra);
    return this.http.put<T>(url, data).pipe(
      tap((entity) => {
        this.store.update(extra, entity);
      })
    );
  }

  public _delete<T>(fragment: string, extra: unknown): Observable<T> {
    const url = this.setUrl(fragment, extra);
    return this.http.delete<T>(url).pipe(
      tap(() => {
        this.store.remove(extra);
      })
    );
  }
}
