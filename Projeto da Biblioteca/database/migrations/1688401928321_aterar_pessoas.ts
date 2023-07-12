import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UpdatePessoasTable extends BaseSchema {
  protected tableName = 'pessoas';

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('livro_id').unsigned().references('livros.id').nullable().alter();
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('livro_id').unsigned().references('livros.id').notNullable().alter();
    });
  }
}
