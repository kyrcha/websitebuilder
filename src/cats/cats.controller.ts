import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
    return `This action returns a #${id} cat`;
    }

}
