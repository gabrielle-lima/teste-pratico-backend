import type Transaction from '#models/transaction'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class TransactionTransformer extends BaseTransformer<Transaction> {
  toObject() {
    return this.pick(this.resource, [
      'amount',
      'cardLastNumbers',
      'clientId',
      'createdAt',
      'cvv',
      'externalId',
      'gatewayId',
      'id',
      'status',
      'updatedAt',
    ])
  }
}
