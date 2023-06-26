import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'criar_livros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.string('descricao').notNullable()
      table.integer('biblioteca_id').unsigned().references('id').inTable('bibliotecas').onDelete('CASCADE')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
