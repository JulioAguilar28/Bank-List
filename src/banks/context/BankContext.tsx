import { ReactNode, createContext } from 'react'
import { Bank } from '../models/Bank'
import { useBankReducer } from '../hooks/useBankReducer'

interface BankContextState {
  banks: Bank[]
  setBanks: (banks: Bank[]) => void
}

/**
 * This is the consumer data, the only source of truth
 */
export const BankContext = createContext<BankContextState>({
  banks: [],
  setBanks: () => {}
})

type Props = {
  children: ReactNode
}

/**
 * This is the accessor of the single source of truth
 */
export function BankProvider({ children }: Props) {
  const { state, setBanks } = useBankReducer()

  return (
    <BankContext.Provider
      value={{
        banks: state,
        setBanks
      }}
    >
      {children}
    </BankContext.Provider>
  )
}
