import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions_products'

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('transaction_id').unsigned().notNullable().references('transactions.id')
      table.integer('product_id').unsigned().notNullable().references('products.id')
      table.integer('quantity').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('transaction_id')
      table.dropForeign('product_id')
    })
    this.schema.dropTableIfExists(this.tableName)
  }
}
