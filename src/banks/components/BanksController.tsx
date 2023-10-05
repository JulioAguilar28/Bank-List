import { useEffect, useState } from 'react'

import { BankCardView } from './BankCardView'
import * as BankService from '../services/BankService'
import { useBanks } from '../hooks/useBanks'

export default function BanksController() {
  const { banks, setBanks } = useBanks()
  const [requestError, setRequestError] = useState<Error>()

  useEffect(() => {
    const getBanksRequest = async () => {
      const banks = await BankService.getBanks()
      setBanks(banks)
    }

    getBanksRequest().catch((reason) => {
      const error = reason as Error
      setRequestError(new Error(error.message))
    })
  }, [])

  if (requestError) {
    return (
      <div className="h-screen flex items-center text-center text-2xl text-red-400">
        <p>Ocurrio un error al realizar la petición, por favor intente refrescando la página</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-y-4 p-4">
      {banks.length && banks.map((bank) => <BankCardView key={bank.id} bank={bank} />)}
    </ul>
  )
}
