import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bibliotecas'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('endereco')

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
