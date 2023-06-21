import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import mongoose from 'mongoose';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsService.insertProduct({
      _id: new mongoose.Types.ObjectId().toString(),
      title: prodTitle,
      description: prodDesc,
      price: prodPrice,
    });
    return { id: generatedId };
  }
}
