import SubHeading from '@/app/ui/SubHeading'
import { formatCurrency } from '@/app/utils/helpers'
import React from 'react'

const tableData = [
  {
    accomodation: '1 човек в двойна стая	',
    price: 1149,
  },
  {
    accomodation: 'Трети възрастен',
    price: 1100,
  },
  {
    accomodation: 'Единична стая',
    price: 1548,
  },
  {
    accomodation: 'Дете 2 -5.99 г. в стая с 2-ма възрастни',
    price: 560,
  },
  {
    accomodation: 'Дете 6 -11.99 г. в стая с 2-ма възрастни',
    price: 728,
  },
]

export default function Prices() {
  return (
    <div>
      <SubHeading>Промо пакети</SubHeading>
      <table>
        <tr>
          <th>Настаняване</th>
          <th>Цена</th>
        </tr>
        {tableData.map((offer, i) => (
          <tr key={i}>
            <td>{offer.accomodation}</td>
            <td className='font-bold'>{formatCurrency(offer.price)}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
