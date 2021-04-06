import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all the coffees.';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return `This action returns the coffee with id of ${id}.`;
  }
}
