import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import CatsService from './cats.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger/dist';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('cats')
@ApiTags('Cats')
@UseInterceptors(LoggingInterceptor)
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
