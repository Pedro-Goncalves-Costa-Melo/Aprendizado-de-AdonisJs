import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

    public async index() {

        const bibliotecas = await Biblioteca.all()

        return {
            mensagem: 'Essas são todas as bibliotecas Cadastradas até o momento: ',
            data: bibliotecas,
        }

    }

    public async show({ params }: HttpContextContract) {

        const biblioteca = await Biblioteca.findOrFail(params.id)

        return {
            mensagem: 'Essa é a biblioteca com o Id pesquisado: ',
            Informações: biblioteca
        }

    }

    public async store({ request, response }: HttpContextContract) {
        const dados = request.body()

        const biblioteca = await Biblioteca.create(dados)

        response.status(201)
        return {
            mensagem: 'Biblioteca criada com sucesso!',
            dados_da_biblioteca: biblioteca,
        }
    }

    public async update({ params, request }: HttpContextContract) {

        const NovoDados = request.only(['nome', 'endereco'])

        const dados = await Biblioteca.findOrFail(params.id)

        dados.nome = NovoDados.nome
        dados.endereco = NovoDados.endereco

        await dados.save()

        return {
            mensagem: 'Biblioteca atualizada com sucesso!',
            dados: dados,
        }


    }

    public async destroy({ params }: HttpContextContract) {

        const id = await Biblioteca.findOrFail(params.id)

        await id.delete()

        return {
            mensagem: 'Biblioteca excluida com sucesso',
            aviso: 'Todos os livros cadastrados nessa biblioteca foram deletados',
            Informações: id,
        }

    }

}
