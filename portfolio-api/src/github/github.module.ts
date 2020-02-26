import { GithubService } from './github.service';
import { Module, HttpModule } from '@nestjs/common';
import { GithubController } from './github.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: parseInt(configService.get('HTTP_TIMEOUT')),
        maxRedirects: parseInt(configService.get('HTTP_MAX_REDIRECTS')),
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
