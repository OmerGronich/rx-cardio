import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';


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
  poll(@Res({ passthrough: true }) response: Response) {
    const { status, data, message } = this.appService.pollData();

    if (status === 'error') {
      throw new InternalServerErrorException({ status, data, message });
    } else if (status === 'success') {
      return { status, data, message };
    } else {
      return response
        .status(HttpStatus.ACCEPTED)
        .send({ status, data, message });
    }
  }
}
