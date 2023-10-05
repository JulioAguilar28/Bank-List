import { useEffect, useState } from 'react'

import { BankCardView } from './BankCardView'
import * as BankService from '../services/BankService'
import { useBanks } from '../hooks/useBanks'
import * as BankStorageService from '../services/BankLocalStorageService'

export default function BanksController() {
  const { banks, setBanks } = useBanks()
  const [requestError, setRequestError] = useState<Error>()

  const areSavedBanks = BankStorageService.getSavedBanks().length > 0

  useEffect(() => {
    if (areSavedBanks) {
      setBanks(BankStorageService.getSavedBanks())
      return
    }

    const getBanksRequest = async () => {
      const banks = await BankService.getBanks()
      BankStorageService.saveBanks(banks)
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
    <ul className="flex flex-col gap-y-4 p-4 md:grid md:grid-cols-3 md:gap-x-4">
      {banks.length && banks.map((bank) => <BankCardView key={bank.id} bank={bank} />)}
    </ul>
  )
}
