import { BaseSchema } from '@adonisjs/lucid/schema'
import { GatewayPriority } from '../../app/enum/GatewayPriority.ts'

export default class extends BaseSchema {
  protected tableName = 'gateways'

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable().unique()
      table.boolean('is_active').notNullable().defaultTo(false)
      table.enu('priority', Object.values(GatewayPriority)).defaultTo(1).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTableIfExists(this.tableName)
  }
}
