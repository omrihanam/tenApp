import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();

  async getProductTypes() {
    const types = await this.prisma.product.groupBy({
      by: ['type'],
      _count: { type: true },
    });
    return types.map(t => ({ type: t.type, count: t._count.type }));
  }

  async getProducts(type: string, page: number) {
    const pageSize = 10;
    return await this.prisma.product.findMany({
      where: { type },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }
}
