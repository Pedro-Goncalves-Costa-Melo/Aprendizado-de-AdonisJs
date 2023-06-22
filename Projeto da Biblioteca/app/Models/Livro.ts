import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public Titulo: string

  @column()
  public Autor: string

}
