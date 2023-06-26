import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'

export default class LivrosController {

    public async store({ request, response }: HttpContextContract) {

        const dados = request.body()

        const book = await Livro.create(dados)

        response.status(201)
        return {
            message: 'Livro adicionado com sucesso',
            dados_do_livro: book,
        }
    }

    public async index(){

        return {
            msg: 'Metodo index Funcionando',
        }
    }

    public async show(){

        return {
            msg: 'Metodo show/(get por id) Funcionando',
        }
    }

    public async destroy(){

        return {
            msg: 'Metodo destroy/delete Funcionando',
        }
    }

    public async update(){

        return {
            msg: 'Metodo Patch/Update Funcionando',
        }
    }

}   
