/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router.group(() => {
  router
    .group(() => {
      router.post('signup', [controllers.NewAccount, 'store'])
      router.post('login', [controllers.AccessToken, 'store'])
      router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
    })
    .prefix('auth')
    .as('auth')

  router
    .group(() => {
      router.get('/profile', [controllers.Profile, 'show'])
    })
    .prefix('account')
    .as('profile')
    .use(middleware.auth())
})

router.group(() => {
  router.post('/transactions', [controllers.Transactions, 'store'])
  router.get('/transactions', [controllers.Transactions, 'show']).use(middleware.auth())
  router.post('/transactions/:id', [controllers.Transactions, 'update'])
  router.post('/transactions/:id/charge_back', [controllers.Transactions, 'chargeback'])
})

