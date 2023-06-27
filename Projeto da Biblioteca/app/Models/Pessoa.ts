import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nome: string

  @column()
  public Email: string

  @column()
  public CPF: string

  @column()
  public Endereco: string
}
