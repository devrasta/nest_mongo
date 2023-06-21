import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;
}
