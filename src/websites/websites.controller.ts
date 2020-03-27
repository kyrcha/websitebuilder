import { Controller, Post, Body, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { WebsitesService } from './websites.service';
import { Website } from './interfaces/website.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import {existsSync, mkdirSync, writeFileSync} from 'fs';
import { randomBytes } from 'crypto';
import { join } from 'path';
import { copySync}  from 'fs-extra';
import { exec, cd } from 'shelljs';

const dir = './tmp';

@Controller('websites')
export class WebsitesController {
    constructor(private websiteService: WebsitesService) {}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file, @Body() createWebsiteDto: CreateWebsiteDto) {
        console.log(createWebsiteDto.title);
        console.log(file);
        this.websiteService.create(createWebsiteDto);
        // create temp folder
        const id = randomBytes(5).toString('hex');
        const tempdir = join(dir, id);
        if (!existsSync(tempdir)){
            mkdirSync(tempdir);
        }
        const imgdir = join(tempdir, 'img');
        if (!existsSync(imgdir)){
            mkdirSync(imgdir);
        }
        // save file
        writeFileSync(join(tempdir, 'img', file.originalname), file.buffer);
        const datadir = join(tempdir, '_data');
        if (!existsSync(datadir)){
            mkdirSync(datadir);
        }
        // save data
        let data = JSON.stringify({
            title: createWebsiteDto.title,
            images: [file.originalname]
        });
        writeFileSync(join(datadir, 'site.json'), data);
        // copy the template
        copySync('./template', tempdir);
        //
        const outputdir = join(tempdir, '_site');
        if (!existsSync(outputdir)){
            mkdirSync(outputdir);
        }
        cd(tempdir);
        exec(`../../node_modules/.bin/eleventy --formats=hbs,html,jpg,gif,png`);
    }

    @Get()
    async findAll(): Promise<Website[]> {
        return this.websiteService.findAll();
    }
}
