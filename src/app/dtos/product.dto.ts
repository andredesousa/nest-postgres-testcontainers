import { IsBoolean, IsPositive, IsString, Length } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsPositive()
  quantity: number;

  @Length(1, 4)
  unit: string;

  @IsPositive()
  price: number;

  @Length(1, 4)
  currency: string;

  @IsBoolean()
  isActive: boolean;

  id?: number;
}
