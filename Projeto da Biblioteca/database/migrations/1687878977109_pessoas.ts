import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nome').notNullable()
      table.string('Email').notNullable()
      table.string('CPF').notNullable()
      table.string('Endereco').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
