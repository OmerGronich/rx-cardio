import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-use-cases-wolt-game',
  templateUrl: './wolt-game.component.html',
  styleUrls: ['./wolt-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WoltGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
