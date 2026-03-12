import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('name').notNullable().unique()
      table.integer('amount').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTableIfExists(this.tableName)
  }
}
