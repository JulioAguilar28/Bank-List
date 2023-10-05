import { Reducer } from 'react'
import { Bank } from '../models/Bank'

export enum BankActionKind {
  SetBanks = 'setbanks'
}

interface BankAction {
  type: BankActionKind
  payload?: Bank | Bank[]
}

type BankState = Bank[]

export const bankReducer: Reducer<BankState, BankAction> = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  /**
   * All the functions that belong to BankAction must return a BankSate
   */
  switch (actionType) {
    case BankActionKind.SetBanks:
      return setBanks(state, actionPayload as Bank[])
  }
}

const setBanks = (_state: BankState, payload: Bank[]): BankState => {
  return payload
}
