import { Module } from '@nestjs/common';
import { GithubModule } from 'src/github/github.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GithubModule,
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
