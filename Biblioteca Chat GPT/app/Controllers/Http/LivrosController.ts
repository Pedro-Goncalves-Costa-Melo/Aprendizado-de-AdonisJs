// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import Livro from 'App/Models/Livro'

// export default class LivrosController {
//     async index({ response }) {
//         const livros = await Livro.query().with('Biblioteca').fetch()
//         return response.json(livros)
//     }
// }

'use strict'

const Livro = require('../../../app/Models/Livro')

class LivroController {
  async index ({ response }) {
    const livros = await Livro.query().with('biblioteca').fetch()
    return response.json(livros)
  }

  // Implemente os métodos de criação, atualização, remoção e exibição específicos para Livros
}

module.exports = LivroController