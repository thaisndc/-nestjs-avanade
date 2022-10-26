import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async validalogin(login: string, password: string) {
        console.log('No service - login');
        console.log('No service - senha');
        return { login, password, msg: 'Dados cadastrados com sucesso!' };
    }
}
