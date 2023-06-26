import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

public async index(){

        const bibliotecas = await Biblioteca.all()

        
        return{
            
            mensagem: 'Essas são as bibliotecas existentes: ',
            data: bibliotecas
            
        }
    }

    public async store({request, response}:HttpContextContract){
        const dados = request.body()

        const biblioteca = await Biblioteca.create(dados)

        response.status(201)
        return{
            mensagem: 'Biblioteca criada com sucesso!',
            dados_da_biblioteca: biblioteca,
        }
    }
}
