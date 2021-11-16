import { Injectable } from '@nestjs/common';
// import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
