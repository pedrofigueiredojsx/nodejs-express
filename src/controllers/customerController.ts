import type { Request, Response, NextFunction } from 'express'
import customerRepository from '../repositories/customerRepository.ts'
import type Customer from '../models/customer.ts'

async function getCustomer(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(`${req.params.id}`)
  const customer = await customerRepository.getCustomer(id)
  if (customer) res.json(customer)
  else res.sendStatus(404)
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {
  const customers = await customerRepository.getCustomers()
  res.json(customers)
}

async function postCustomer(req: Request, res: Response, next: NextFunction) {
  const customer = req.body as Customer
  const result = await customerRepository.addCustomer(customer)
  res.status(201).json(result)
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(`${req.params.id}`)
  const cusomerData = req.body as Customer
  const result = await customerRepository.updateCustomer(id, cusomerData)
  res.json(result)
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(`${req.params.id}`)
  const result = await customerRepository.deleteCustomer(id)
  if (result) res.sendStatus(204)
  else res.sendStatus(404)
}

export default {
  getCustomer,
  getCustomers,
  postCustomer,
  patchCustomer,
  deleteCustomer,
}
