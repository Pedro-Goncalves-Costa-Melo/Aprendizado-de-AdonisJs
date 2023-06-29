import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('biblioteca_id').unsigned().notNullable().references('id').inTable('bibliotecas').onDelete('CASCADE');

    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(['biblioteca_id']);
      table.dropColumn('biblioteca_id');
    });
  }
}
