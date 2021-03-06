import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mazes extends BaseSchema {
  protected tableName = 'mazes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('image').notNullable()
      table.json('levels').notNullable()

      table.integer("user_id").references("users.id").onDelete("CASCADE")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
