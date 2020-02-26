import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { response } from 'express';

@Injectable()
export class GithubService {
  readonly BASE_URL = 'https://api.github.com';
  readonly ACCESS_TOKEN = 'ACCESS_TOKEN';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  //TODO: Create data class for repos.
  async getRepos(): Promise<any> {
    const access_token = this.configService.get(this.ACCESS_TOKEN);

    if (null == access_token || undefined == access_token) {
      throw new NotFoundException('Token not found.');
    }

    const headersRequest = {
      Authorization: `token ${access_token}`,
    };

    let res = await this.httpService.get(`${this.BASE_URL}/user/repos`, {
      headers: headersRequest,
    }).toPromise();

    return res.data;
  }
}
