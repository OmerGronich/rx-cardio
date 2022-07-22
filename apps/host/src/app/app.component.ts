import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Link } from './types';

@Component({
  selector: 'rx-use-cases-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  links: Link[] = [
    { href: 'wolt-game', label: 'Wolt Game' },
    { href: 'polling', label: 'HTTP Polling' },
    { href: 'min-max', label: 'Linked min-max sliders' },
  ];
}
