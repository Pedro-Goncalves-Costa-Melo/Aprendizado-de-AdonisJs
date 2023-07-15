import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('email').notNullable()
      table.string('cpf').notNullable()
      table.string('endereco').notNullable()
      table.string('livro_id').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
