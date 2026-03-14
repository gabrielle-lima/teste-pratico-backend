import { TransactionsProductSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Transaction from './transaction.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Product from './product.ts'

export default class TransactionProduct extends TransactionsProductSchema {
  @belongsTo(() => Transaction)
  declare transaction: BelongsTo<typeof Transaction>

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>
}
