import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-use-cases-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollingComponent {
}
