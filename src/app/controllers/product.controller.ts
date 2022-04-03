import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from '../dtos/product.dto';
import { ProductService } from '../services/product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<ProductDto[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProductDto> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: ProductDto): Promise<ProductDto> {
    return this.productService.create(createUserDto);
  }

  @Put(':id')
  update(@Body() updateUserDto: ProductDto): Promise<ProductDto> {
    return this.productService.update(updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.productService.delete(id);
  }
}
