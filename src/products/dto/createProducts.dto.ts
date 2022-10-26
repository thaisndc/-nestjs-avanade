import { 
  IsNotEmpty, 
  IsNumber, 
  IsNumberString, 
  IsString, 
} from "class-validator";

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString({
      maxDecimalPlaces: 2
  })
  price: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  categoryId: number;
}