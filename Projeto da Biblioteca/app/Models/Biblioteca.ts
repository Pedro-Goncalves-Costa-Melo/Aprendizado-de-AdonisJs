import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Biblioteca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nome: string

}