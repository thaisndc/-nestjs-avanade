import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDTO } from "./createProducts.dto";

export class UpdateProductsDTO  extends PartialType (CreateProductDTO){}