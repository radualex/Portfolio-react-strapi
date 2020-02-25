import { GithubService } from './github.service';
import { Module } from '@nestjs/common';
import { GithubController } from './github.controller';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
