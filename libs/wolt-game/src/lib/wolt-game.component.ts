import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  first,
  map,
  merge,
  Observable,
  pluck,
  repeat,
  scan,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  takeWhile,
  timer,
} from 'rxjs';

interface State {
  clicks: number;
  time: number;
}

type EventType = 'click' | 'tick';

const reducer = (acc: State, curr: EventType): State => {
  switch (curr) {
    case 'click':
      return {
        ...acc,
        clicks: acc.clicks + 1,
      };
    case 'tick':
      return {
        ...acc,
        time: acc.time - 1,
      };
    default:
      return acc;
  }
};

const startingTime = 5;
const initialState = { time: startingTime, clicks: 0 };

@Component({
  selector: 'rx-use-cases-wolt-game',
  templateUrl: './wolt-game.component.html',
  styleUrls: ['./wolt-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WoltGameComponent implements OnInit {
  clicksSubject = new Subject<EventType>();
  startingTime = startingTime;
  state$!: Observable<State>;
  highScore!: Observable<number>;

  ngOnInit(): void {
    const clicks$ = this.clicksSubject.asObservable();

    const timer$: Observable<EventType> = clicks$.pipe(
      first(),
      switchMap(() => timer(0, 1000)),
      map(() => 'tick')
    );

    this.state$ = merge(clicks$, timer$).pipe(
      scan(reducer, initialState),
      startWith(initialState),
      takeWhile((state) => state.time > 0, true),
      repeat()
    );

    this.highScore = this.state$.pipe(
      filter((state) => state.time === 0),
      pluck('clicks'),
      startWith(0),
      shareReplay(1),
      scan((acc, curr) => Math.max(acc, curr), 0),
      distinctUntilChanged()
    );
  }

  buttonClicked() {
    this.clicksSubject.next('click');
  }
}
