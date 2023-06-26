import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Biblioteca from 'App/Models/Biblioteca'

export default class BibliotecasController {

    async index ({response}: HttpContextContract) {
        const bibliotecas = await Biblioteca.all()

        return response.json(bibliotecas)
    }

    public async store({ request, response }: HttpContextContract) {
        const { nome, endereco } = request.only(['nome', 'endereco'])
    
        // Cria uma nova instância do modelo Biblioteca
        const biblioteca = new Biblioteca()
        biblioteca.nome = nome
        biblioteca.endereco = endereco
    
        // Salva a nova biblioteca no banco de dados
        await biblioteca.save()
    
        return response.json(biblioteca)
      }


}
