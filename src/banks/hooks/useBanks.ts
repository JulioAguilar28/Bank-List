import { useContext } from 'react'
import { BankContext } from '../context/BankContext'

export function useBanks() {
  const bankContext = useContext(BankContext)

  if (bankContext === undefined) throw new Error('The bank context must be used with BankProvider')

  return { ...bankContext }
}
