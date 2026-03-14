import { BaseSchema } from '@adonisjs/lucid/schema'
import { Roles } from '../../app/enum/roles.ts'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('full_name')
      table.string('name').notNullable()
      table.enu('role', Object.values(Roles)).defaultTo(Roles.USER).notNullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('role')
      table.string('full_name').notNullable()
    })
  }
}
