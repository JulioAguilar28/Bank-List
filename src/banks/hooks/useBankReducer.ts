import { useReducer } from 'react'
import { BankActionKind, bankReducer } from '../reducers/BankReducer'
import { Bank } from '../models/Bank'

/**
 * Use this reducer to get the bank mutations in a safety way
 * avoiding unexpected values
 *
 * This has following the man-in-the-middle desing pattern
 */
export function useBankReducer() {
  const [state, dispatch] = useReducer(bankReducer, [])

  const setBanks = (banks: Bank[]) => {
    dispatch({ type: BankActionKind.SetBanks, payload: banks })
  }

  return {
    state,
    setBanks
  }
}
