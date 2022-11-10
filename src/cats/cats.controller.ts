import { Controller, Get, Param } from '@nestjs/common';
import CatsService from './cats.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger/dist';

@Controller('cats')
@ApiTags('Cats')
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieves all cats.',
  })
  findMany(): string[] {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieves a specific cat.',
  })
  findOne(@Param('id') id: string): string {
    return this.service.findOne(id);
  }
}
