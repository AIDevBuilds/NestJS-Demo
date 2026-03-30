import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { AllExceptionsFilter } from './common/filter/all-exception.filter';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { ErrorsInterceptor } from './common/interceptor/errors.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalInterceptors(new LoggingInterceptor(), new ErrorsInterceptor());
  await app.listen(3000);
}
bootstrap();
