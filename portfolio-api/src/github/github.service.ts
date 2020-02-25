import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
    readonly BASE_URL = 'api.github.com';

    getUserData() {
        return 'Hello World!'
    }
}
