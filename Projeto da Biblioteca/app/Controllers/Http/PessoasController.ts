import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
    
}
