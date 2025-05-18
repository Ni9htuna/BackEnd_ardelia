import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateSiswasTable extends BaseSchema {
  protected tableName = 'siswas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama').notNullable()
      table.string('email').notNullable()
      table.integer('umur').nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
