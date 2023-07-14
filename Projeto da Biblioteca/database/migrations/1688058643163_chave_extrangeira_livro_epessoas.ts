import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('livro_id').references('livros.id').nullable();
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('livro_id');
    });
  }
}
