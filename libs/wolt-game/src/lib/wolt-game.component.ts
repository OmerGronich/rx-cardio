import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  first,
  map,
  merge,
  Observable,
  scan,
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

  ngOnInit(): void {
    const clicks$ = this.clicksSubject
      .asObservable();

    const timer$: Observable<EventType> = clicks$.pipe(
      first(),
      switchMap(() => timer(0, 1000)),
      map(() => 'tick')
    );

    this.state$ = merge(clicks$, timer$).pipe(
      scan(reducer, initialState),
      takeWhile((state) => state.time > 0, true),
      startWith(initialState)
    );
  }

  buttonClicked() {
    this.clicksSubject.next('click');
  }
}
