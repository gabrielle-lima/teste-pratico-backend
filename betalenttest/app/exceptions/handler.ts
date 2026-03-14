import app from '@adonisjs/core/services/app'
import { type HttpContext, errors, ExceptionHandler } from '@adonisjs/core/http'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  async handle(error: unknown, ctx: HttpContext) {
    /**
     * For API requests, return JSON instead
     */
    if (error instanceof errors.E_ROUTE_NOT_FOUND && ctx.request.accepts(['json'])) {
      return ctx.response.status(404).json({
        error: 'Route not found',
        message: `Cannot ${ctx.request.method()} ${ctx.request.url()}`,
      })
    }

    /**
     * Handle route not found errors by rendering a custom 404 page
     */

    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the a third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
