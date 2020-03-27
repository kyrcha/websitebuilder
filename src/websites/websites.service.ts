import { Injectable } from '@nestjs/common';
import { Website } from './interfaces/website.interface';

@Injectable()
export class WebsitesService {
    private readonly websites: Website[] = [];

    create(website: Website) {
        this.websites.push(website);
    }

    findAll(): Website[] {
        return this.websites;
    }
}
