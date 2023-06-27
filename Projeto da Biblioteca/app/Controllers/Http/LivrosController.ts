import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'

export default class LivrosController {

    public async index() {

        const livros = await Livro.all()

        return livros.map(livro => {
            return {
                Id: livro.id,
                Titulo: livro.Titulo,
                Autor: livro.Autor
            }
        })

    }

    public async show({params}: HttpContextContract){

        const id = await Livro.findOrFail(params.id)

        return {
            mensagem: 'Esse é o livro com o Id requisitado: ',
            dados: id,
        }

    }

    public async store({ request, response }: HttpContextContract) {

        const dados = request.body()

        const book = await Livro.create(dados)

        response.status(201)
        return {
            message: 'Livro adicionado com sucesso',
            dados_do_livro: book,
        }
    }


}   
