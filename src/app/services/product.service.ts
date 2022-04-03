import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductDto } from '../dtos/product.dto';
import { Product } from '../entities/product';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
  ) {}

  /**
   * Gets a list of products.
   * @returns A list of products.
   */
  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  /**
   * Creates a product.
   * @param productDto The product to insert.
   * @returns The inserted product.
   */
  async create(productDto: ProductDto): Promise<Product> {
    return this.productRepository.create(productDto);
  }

  /**
   * Gets a product by id.
   * @param id The id of the product.
   * @returns The product.
   */
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findByPk(id);

    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  /**
   * Updates a product.
   * @param productDto The product to update.
   * @returns The updated product.
   */
  async update(productDto: ProductDto): Promise<Product> {
    const product = await this.findOne(productDto.id || -1);

    return product.setAttributes(productDto).save();
  }

  /**
   * Deletes a product by id.
   * @param id The id of the product to delete.
   * @returns The status of the operation.
   */
  async delete(id: number): Promise<void> {
    const product = await this.findOne(id);

    return product.destroy();
  }
}
