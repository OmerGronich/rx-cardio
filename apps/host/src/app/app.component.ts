import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './types';

@Component({
  selector: 'rx-cardio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  links: Link[] = [
    { href: 'wolt-game', label: 'Wolt Game' },
    { href: 'polling', label: 'HTTP Polling' },
    { href: 'pagination', label: 'Pagination' },
    { href: 'type-ahead', label: 'Typeahead' },
    { href: 'fps-meter', label: 'FPS Meter' },
    { href: 'typing-test', label: 'Typing Test' },
  ];
}
