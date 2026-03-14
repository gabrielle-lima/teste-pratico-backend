import { ClientSchema } from '#database/schema'
import Transaction from './transaction.ts'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class Client extends ClientSchema {
  @hasMany(() => Transaction)
  declare transactions: HasMany<typeof Transaction>
}
