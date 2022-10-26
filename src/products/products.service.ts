import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async createProducts(req): Promise<string>{
        return 'Produto cadastrado com sucesso!'
    }
    async findAll() {
        return 'Lista de produtos';
    }
    async findOne(id: string) {
        return `Produto ${id}`;
    }
    async update(id: string , req) {
        return `Produto ${id} atualizado com sucesso!`;
    }
}