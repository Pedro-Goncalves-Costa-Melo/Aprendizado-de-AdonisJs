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

    public async show({ params }: HttpContextContract) {

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

    public async update({ params, request }: HttpContextContract) {

        const id_do_update = await Livro.findOrFail(params.id)

        const newData = request.body()

        id_do_update.Titulo = newData.Titulo
        id_do_update.Autor = newData.Autor

        await id_do_update.save()

        return {
            mensagem: 'Livro atualizado com sucesso!',
            dados: id_do_update,
        }

    }

    public async destroy({ params }: HttpContextContract) {

        const id = await Livro.findOrFail(params.id)

        await id.delete()

        return {
            mensagem: 'Livro Excluido com sucesso!',
            Dados: id,
        }
    }

}   
