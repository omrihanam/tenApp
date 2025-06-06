import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mockProducts = {
  bike: [
    {
      id: 1,
      name: 'Mountain Bike',
      description: 'Great for trails',
      price: 500,
      attributes: { color: 'red', wheelSize: '27.5"' },
    },
  ],
};

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getProductTypes: jest.fn(() => [
              { type: 'bike', count: 1 },
            ]),
            getProducts: jest.fn(() => ({
              data: mockProducts.bike,
              total: 1,
              page: 1,
              pageSize: 10,
            })),
            getProductStatistics: jest.fn(() => [
              {
                type: 'bike',
                total: 1,
                attributes: {
                  color: { red: 1 },
                  wheelSize: { '27.5"': 1 },
                },
              },
            ]),
            getProductFilterValues: jest.fn(() => ({
              name: ['Mountain Bike'],
              'attributes.color': ['red'],
              'attributes.wheelSize': ['27.5"'],
            })),
          },
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  it('should return product types', async () => {
    const result = await appController.getTypes();
    expect(result).toEqual([{ type: 'bike', count: 1 }]);
  });

  it('should return products', async () => {
    const result = await appController.getProducts('bike', '1');
    expect(result.data).toHaveLength(1);
    expect(result.total).toBe(1);
  });

  it('should return product statistics', async () => {
    const result = await appController.getProductStatistics();
    expect(result[0]).toHaveProperty('type', 'bike');
    expect(result[0].attributes).toHaveProperty('color');
    expect(result[0].attributes.color).toHaveProperty('red', 1);
  });

  it('should return product filter values', async () => {
    const result = await appController.getFilterValues('bike');
    expect(result).toHaveProperty('name');
    expect(result['attributes.color']).toBeDefined();
    expect(result['attributes.wheelSize']).toBeDefined();
  });
});
