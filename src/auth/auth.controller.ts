import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
//injeção de dependencia. o auth controller depende do auth service.
// é criada no authcontroller.
 constructor(private readonly authService: AuthService){}
// o construtor inicia o authservice, cria uma ponte.
// o authservice é injetado no authcontroller.
// o authcontroller chama o authservice.

//informações que passa no body>login e senha.

    @Post('login')
    async validalogin(@Body() req) {
        const {login, password} = req;

        if(!login) {
        //return { error: true, msg: 'Login não informado!' };
            throw new HttpException('Login não encontrado!',
            HttpStatus.FORBIDDEN);
               

// diferença entre erro e excessão.
//erro interrompe a execução do código.
//excessão é um erro que não interrompe a execução do código.

        console.log('login', login);
        console.log('senha', password);
        return this.authService.validalogin(login, password);
}
    }
}
