
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'

export default class Moment extends BaseModel {
  @hasMany(()=>Comment)
  public comments: HasMany<typeof Comment>
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string

}
