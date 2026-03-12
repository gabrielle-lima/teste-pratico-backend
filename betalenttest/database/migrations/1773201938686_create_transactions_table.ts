import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('client_id').references('clients.id').unsigned()
      table.integer('gateway_id').references('gateways.id').unsigned()
      table.integer('external_id').unsigned()
      table.string('status').notNullable()
      table.integer('amount').notNullable()
      table.integer('card_last_numbers').notNullable().unique()
      table.integer('cvv').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTableIfExists(this.tableName)
  }
}
