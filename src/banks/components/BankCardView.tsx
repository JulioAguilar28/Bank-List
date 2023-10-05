import type { Bank } from '../models/Bank'

type Props = {
  bank: Bank
}

export function BankCardView({ bank }: Props) {
  return (
    <li
      key={bank.id}
      className="flex flex-col p-2 lg:p-4 items-center w-full h-[calc(100vh_-_2rem)] md:h-[26rem] gap-y-4 bg-white border border-gray-200 shadow-lg rounded-xl"
    >
      <header className="w-full h-auto max-h-60 lg:max-h-48">
        <img
          src={bank.url}
          alt={`${bank.bankName} bank image`}
          className="w-full h-full object-cover rounded-xl lg:object-contain"
        />
      </header>

      <section className="w-full flex flex-col grow gap-y-2">
        <h2 className="font-bold text-lg">{bank.bankName}</h2>
        <h3>{`Fue creado hace ${bank.age} años`}</h3>
        <p>{bank.description}</p>
      </section>
    </li>
  )
}
