import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bibliotecas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nome')
      table.string('Endereco')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
