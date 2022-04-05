import { getModelToken } from '@nestjs/sequelize';
import { Test } from '@nestjs/testing';
import { Mock } from 'ts-mockery';
import { Product } from '../entities/product';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let product: Product;
  let repository: typeof Product;
  let service: ProductService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getModelToken(Product),
          useValue: {
            findAll: jest.fn(() => []),
            findByPk: jest.fn(() => product),
            create: jest.fn(() => product),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repository = module.get<typeof Product>(getModelToken(Product));
    product = Mock.of<Product>({
      setAttributes: () => product,
      save: () => Promise.resolve(product),
      destroy: () => undefined,
    });
  });

  describe('#findAll', () => {
    it('returns an array of products', async () => {
      expect(await service.findAll()).toEqual([]);
    });
  });

  describe('#create', () => {
    it('returns a new product', async () => {
      expect(await service.create(product)).toEqual(product);
    });
  });

  describe('#findOne', () => {
    it('returns an product', async () => {
      expect(await service.findOne(1)).toEqual(product);
    });

    it('fails with an error', async () => {
      jest.spyOn(repository, 'findByPk').mockReturnValue(Promise.resolve(null));

      await expect(service.findOne(1)).rejects.toThrow('Not Found');
    });
  });

  describe('#update', () => {
    it('returns the updated product', async () => {
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(product));

      expect(await service.update(1, product)).toEqual(product);
    });
  });

  describe('#remove', () => {
    it('removes the product', async () => {
      jest.spyOn(product, 'destroy');
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(product));

      await service.delete(1);

      expect(product.destroy).toHaveBeenCalled();
    });
  });
});
