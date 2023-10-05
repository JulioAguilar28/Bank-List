import { Bank } from '../models/Bank'

const BANKS_KEY = 'banks-key'

export const saveBanks = (banks: Bank[]) => {
  localStorage.setItem(BANKS_KEY, JSON.stringify(banks))
}

export const getSavedBanks = (): Bank[] => {
  return JSON.parse(localStorage.getItem(BANKS_KEY) ?? '[]')
}
