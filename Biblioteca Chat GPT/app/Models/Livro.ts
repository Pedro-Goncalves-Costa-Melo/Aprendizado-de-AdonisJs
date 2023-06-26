import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column ()
  public titulo : string

  @column ()
  public autor: string

  @column()
  public descricao: string
}
