import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import CatsService from './cats.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger/dist';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import Cat from './cats.entity';

@Controller('cats')
@ApiTags('Cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieves all cats.',
  })
  async findMany(): Promise<Cat[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retrieves a specific cat.',
  })
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.service.findOne(id);
  }
}
