import { nanoid } from 'nanoid'

// import { ApiService } from '../../services/ApiService'
import { Bank } from '../models/Bank'
import BanksMock from '../../mocks/banks.json'

export const getBanks = async (): Promise<Bank[]> => {
  try {
    // const response = await ApiService.of().get('/challenge/banks')
    // This mock response is used 'cause of CORS problem
    const response = { data: BanksMock }
    return response.data.map(parseBank)
  } catch (reason) {
    const error = reason as Error
    throw new Error(error.message)
  }
}

/**
 * This functions add an unique id to the bank item
 * to avoid using the index as key to render each item
 */
const parseBank = (json: Omit<Bank, 'id'>): Bank => ({
  id: nanoid(),
  ...json
})
