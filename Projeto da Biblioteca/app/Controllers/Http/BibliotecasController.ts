import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

    public async index() {

        const bibliotecas = await Biblioteca.all()

        return bibliotecas
        // return bibliotecas.map(biblioteca => {
            // return{
            //     Id: biblioteca.id,
            //     Nome: biblioteca.Nome,
            //     Endereco: biblioteca.Endereco,
            // }
        //})

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

    public async destroy({params}: HttpContextContract){

        const id = await Biblioteca.findOrFail(params.id)

        await id.delete()

        return {
            mensagem: 'Biblioteca excluida com sucesso',
            Informações: id,
        }

    }
}
