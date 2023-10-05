import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import BanksMock from '../../mocks/banks.json'
import { Bank } from '../models/Bank'
import { BankCardView } from './BankCardView'

export default function BanksController() {
  const [banks, setBanks] = useState<Bank[]>([])

  useEffect(() => {
    const stateBanks = BanksMock.banks.map((bank) => ({ id: nanoid(), ...bank }))

    setBanks(stateBanks)
  }, [])

  return (
    <ul className="flex flex-col gap-y-4 p-4">
      {banks.length && banks.map((bank) => <BankCardView key={bank.id} bank={bank} />)}
    </ul>
  )
}
