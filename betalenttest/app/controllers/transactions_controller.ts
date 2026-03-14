import Transaction from '#models/transaction'
import type { HttpContext } from '@adonisjs/core/http'

export default class TransactionsController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const transactions = []
    return Response.json({ transactions })
  }

  /**
   * Display form to create a new record
   */
  async create({ request, response }: HttpContext) {
    const { amount }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, request }: HttpContext) {
    const id = request.param('id')
    const transaction = await Transaction.findBy('id', id)
    return Response.json({ transaction })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}

  async chargeback({ params }: HttpContext) {
    const { id } = params
  }
}
