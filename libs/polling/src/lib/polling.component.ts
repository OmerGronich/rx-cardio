import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  catchError,
  first,
  interval,
  of,
  repeat,
  startWith,
  Subject,
  switchMap,
  takeWhile,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface PollingState {
  status: 'pending' | 'success' | 'error';
  message: string;
  data?: any[];
}

@Component({
  selector: 'rx-use-cases-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollingComponent {
  private clicksSubject = new Subject<void>();

  polling$ = this.clicksSubject.asObservable().pipe(
    first(),
    switchMap((_, index) => {
      if (!index) {
        return this.prepare();
      }

      return of(index);
    }),
    switchMap((value) =>
      interval(1000).pipe(
        startWith(value),
        switchMap((_) => this.poll()),
        takeWhile((pollingState) => pollingState.status === 'pending', true),
        catchError((e) => of(e.error))
      )
    ),
    repeat()
  );

  constructor(private http: HttpClient) {}

  startPolling() {
    this.clicksSubject.next();
  }

  prepare() {
    return this.http.post<PollingState>('/api/prepare', {});
  }

  poll() {
    return this.http.get<PollingState>('/api/poll');
  }
}
