import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {

    public async index({ response }: HttpContextContract) {
        const pessoas = await Pessoa.all()
        
        return response.json(pessoas)

    }
}
