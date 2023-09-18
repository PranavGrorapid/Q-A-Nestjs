import { NestFactory } from '@nestjs/core';
import { QaModule } from './qa/qa.module';

async function bootstrap() {
  const app = await NestFactory.create(QaModule);
  await app.listen(3000);
}
bootstrap();
