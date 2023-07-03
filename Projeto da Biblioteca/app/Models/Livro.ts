import { BaseModel, BelongsTo, HasOne, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Biblioteca from './Biblioteca'
import Pessoa from './Pessoa'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public autor: string

  @column()
  public bibliotecaId: number

  @column({ columnName: 'emprestado' })
  public emprestado: boolean

  @belongsTo(() => Biblioteca)
  public biblioteca: BelongsTo<typeof Biblioteca>

  @hasOne(() => Pessoa)
  public pessoa: HasOne<typeof Pessoa>

}
