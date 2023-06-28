import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Biblioteca from './Biblioteca'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public titulo: string
  
  @column()
  public autor: string
  
  @column()
  public bibliotecaId: number

  @belongsTo(() => Biblioteca)
  public biblioteca: BelongsTo<typeof Biblioteca>

}
