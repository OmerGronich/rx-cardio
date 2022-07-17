import { Injectable } from '@nestjs/common';
import data from './mock.json';

export interface PollingResponse {
  status: 'pending' | 'success' | 'error';
  message: string;
  data?: any[];
}

interface GenericResponse {
  message: string;
}

const initialState = {
  status: 'pending',
  message: 'Still collecting data... try again in a few seconds',
} as const;

let state: PollingResponse = initialState;

@Injectable()
export class AppService {
  getData(): GenericResponse {
    return { message: 'Welcome to polling-api!' };
  }

  prepare(): PollingResponse {
    state = initialState;
    setTimeout(() => {
      const shouldError = Math.random() > 0.8;
      if (shouldError) {
        state = {
          status: 'error',
          message: 'failed collecting data',
        };
      } else {
        state = {
          status: 'success',
          message: 'Here is your data',
          data,
        };
      }
    }, 10000);
    return {
      message:
        'successfully started the data collection process, please check in every few seconds.',
      status: 'pending',
    };
  }

  getPollData(): PollingResponse {
    return state;
  }
}
