import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    process.env.PORT ?? (app.get(ConfigService).get('PORT') || 3000),
  );
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
