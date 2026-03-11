import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.number('transaction_id').unsigned().notNullable().references('transactions.id')
      table.number('product_id').unsigned().notNullable().references('products.id')
      table.number('quantity').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
