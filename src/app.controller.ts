import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
