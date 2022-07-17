import {Controller, Get, Post} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('prepare')
  prepare() {
    return this.appService.prepare();
  }

  @Get('poll')
  poll() {
    return this.appService.pollData();
  }

}
