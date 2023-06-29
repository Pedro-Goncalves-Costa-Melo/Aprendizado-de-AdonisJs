import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import Livro from './Livro'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public endereco: string

  @column()
  public livroId: number

  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>

}
