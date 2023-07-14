import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Livro from 'App/Models/Livro'
import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {

    public async index({ response }: HttpContextContract) {

        const pessoas = await Pessoa.all()

        return response.json(pessoas)
    }


    public async show({ params }: HttpContextContract) {

        const id = await Pessoa.findOrFail(params.id)

        return {
            mensagem: 'Os dados do Usuario com o id informado são: ',
            dados: id,
        }
    }


    public async store({ request }: HttpContextContract) {

        const New_data = request.body()

        const usuario = await Pessoa.create(New_data)

        return {
            message: 'Usuário cadastrado com sucesso!',
            dados_do_usuário: usuario,
        }
    }


    public async update({ request, params }: HttpContextContract) {

        const Old_data_Id = await Pessoa.findOrFail(params.id)

        const New_data = request.body()

        Old_data_Id.nome = New_data.nome
        Old_data_Id.email = New_data.email
        Old_data_Id.cpf = New_data.cpf
        Old_data_Id.endereco = New_data.endereco

        await Old_data_Id.save()

        return {
            mensagem: 'Usuário atualizado!',
            dados_do_usuario: Old_data_Id,
        }
    }


    public async destroy({ params }: HttpContextContract) {

        const id = await Pessoa.findOrFail(params.id)

        await id.delete()

        return {
            mensagem: 'Usuário excluido com sucesso!',
            Dados_do_Usuario: id,
        }
    }

    //Função para um usuário pegar um livro emprestado
    public async emprestarLivro({ params }: HttpContextContract) {
        const { pessoaId, livroId } = params

        const pessoa = await Pessoa.findOrFail(pessoaId)

        const livro = await Livro.findOrFail(livroId)

        if (livro.emprestado) {
            return {
                mensagem: 'Este livro já está emprestado'
            }
        }

        if (pessoa.livroId != 0) {
            return {
                mensagem: 'Este usuário já possui um livro'
            }
        }

        livro.emprestado = true
        await livro.save()

        pessoa.livroId = livro.id
        await pessoa.save()

        return {
            message: 'Livro emprestado com sucesso',
        }
    }


    //Função para um usuário devolver um livro
    public async devolverLivro({ params }: HttpContextContract) {

        const pessoa = await Pessoa.findOrFail(params)

        if (pessoa.livroId == 0) {
            return {
                mensagem: 'Este usuario não possui um livro emprestado'
            }
        }

        const livro = await Livro.findOrFail(pessoa.livroId)

        livro.emprestado = false
        await livro.save()

        //Como definir que a pessoa tem ou não um livro emprestado?
        pessoa.livroId = 0
        await pessoa.save()

        return {
            mensagem: 'Devolução executada com sucesso!'
        }
    }
}
