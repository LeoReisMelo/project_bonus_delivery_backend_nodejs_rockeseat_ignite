import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/createClientController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvaliable/FindAllAvaliableController'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController'
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/createDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/deliveries/FindAllDeliveriesController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const createDeliverymanController = new CreateDeliverymanController()
const createDeliverController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndDateController = new UpdateEndDateController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

// Client
routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)
routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle)

// Deliveryman
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)
routes.post('/deliveryman', createDeliverymanController.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

// Delivery
routes.post('/delivery', ensureAuthenticateClient, createDeliverController.handle)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle)
routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)

export { routes }