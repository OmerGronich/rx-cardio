import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-use-cases-min-max-sliders',
  templateUrl: './min-max-sliders.component.html',
  styleUrls: ['./min-max-sliders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxSlidersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
