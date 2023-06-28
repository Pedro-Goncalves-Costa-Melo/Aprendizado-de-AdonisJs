import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Livro from './Livro'

export default class Biblioteca extends BaseModel {
  @hasMany(()=> Livro)
  public livros: HasMany<typeof Livro>
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public endereco: string
}
