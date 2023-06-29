import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'
import Biblioteca from 'App/Models/Biblioteca'

export default class LivrosController {

    //Função que retorna todos os livros cadastrados em todas as bibliotecas
    public async index() {

        const livro = await Livro.all();

        return {
            mensagem: 'Esses são todos os livros cadastrdos',
            livros: livro,
        }

    }

    //Função que  mostra o livro por Id pesquisado
    public async show({ params }: HttpContextContract) {

        const id = await Livro.findOrFail(params.id)

        return {
            mensagem: 'Esse é o livro com o Id requisitado: ',
            dados: id,
        }

    }

    //Função que inclui um livro no sistema
    public async store({ request, response }: HttpContextContract) {

        const dados = request.body()

        const book = await Livro.create(dados)

        response.status(201)
        return {
            message: 'Livro adicionado com sucesso',
            dados_do_livro: book,
        }
    }

    //Função para atualizar um livro específico
    public async update({ params, request }: HttpContextContract) {

        const id_do_update = await Livro.findOrFail(params.id)

        const newData = request.body()

        id_do_update.titulo = newData.titulo
        id_do_update.autor = newData.autor

        await id_do_update.save()

        return {
            mensagem: 'Livro atualizado com sucesso!',
            dados: id_do_update,
        }

    }

    //Função para deletar um livro específico
    public async destroy({ params }: HttpContextContract) {

        const id = await Livro.findOrFail(params.id)

        await id.delete()

        return {
            mensagem: 'Livro Excluido com sucesso!',
            Dados: id,
        }
    }

    //função que mostra Todos os livros que estão armazenados na biblioteca com o Id que foi informado na chamada HTTP
    public async livrosPorIdBiblioteca({ params }: HttpContextContract) {

        const { bibliotecaId } = params

        const livros = await Livro.query().where('biblioteca_id', bibliotecaId)


        return {
            mensagem: 'Esses são os livros na biblioteca com o Id pesquisado: ',
            livros: livros,


        }

    }

    //Função para transferir um livro de uma biblioteca para outra
    public async transferir({ request }: HttpContextContract) {

        const {livroId, bibliotecaDestinoId} = request.body()

        const livro = await Livro.findOrFail(livroId)

        await Biblioteca.findOrFail(bibliotecaDestinoId)

        livro.bibliotecaId = bibliotecaDestinoId

        await livro.save()

        return {
            mensagem: 'O livro foi transferido para a biblioteca solicitada',
            dados: livro,
        }
    }

}   
