import { BaseModel, BelongsTo, HasOne, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'

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
  public livro_id: string

  @belongsTo(() => Livro)
  public livro: BelongsTo<typeof Livro>

  @hasOne(() => Livro)
  public livro_emprestado: HasOne<typeof Livro>

}
