import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column({ type: DataType.FLOAT })
  quantity: number;

  @Column
  unit: string;

  @Column({ type: DataType.FLOAT })
  price: number;

  @Column
  currency: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
