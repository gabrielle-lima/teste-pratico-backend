import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTableIfNotExists(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254)
      table.string('password').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      this.schema.dropTableIfExists(this.tableName)
      this.schema.raw('DROP TYPE IF EXISTS "role" ')
      table.dropIndex(['email'], 'users_email_unique')
      table.enu('role', ['ADMIN', 'USER', 'MANAGER', 'FINANCE'], {
        existingType: false,
        useNative: false,
        enumName: 'role',
      })
    })
  }
}
