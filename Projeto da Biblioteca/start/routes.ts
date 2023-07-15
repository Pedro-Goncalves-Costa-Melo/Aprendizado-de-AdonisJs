/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

//Rotas Basicas
Route.group(() => {

  Route.resource('/livros', 'LivrosController').apiOnly()

  Route.resource('/bibliotecas', 'BibliotecasController').apiOnly()

  Route.resource('/pessoas', 'PessoasController').apiOnly()
  
}).prefix('/api')

//Rotas Adicionais
Route.group(() => {

  //Rota para mostrar todos os livros em uma biblioteca
  Route.get('/bibliotecas/:bibliotecaId/livros', 'LivrosController.livrosPorIdBiblioteca')

  //Transferencia de um livro de uma biblioteca para outra
  Route.post('/livros/transferir', 'LivrosController.transferir')

  //Emprestimo de livro para um usuário
  Route.patch('/pessoas/:pessoaId/:livro_id/emprestimo', 'PessoasController.emprestar')

  //Devolução de um livro
  Route.patch('pessoas/:pessoaId/:livro_id/devolver', 'PessoasController.devolver')
}).prefix('/api')
