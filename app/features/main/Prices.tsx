import SubHeading from '@/app/ui/SubHeading'
import { formatCurrency } from '@/app/utils/helpers'
import React from 'react'
import {tableData} from '../../../public/data'


export default function Prices() {
  return (
    <div>
      <SubHeading>Промо пакети</SubHeading>
      <table>
        <thead>
        <tr>
          <th>Настаняване</th>
          <th>Цена</th>
        </tr>
        </thead>
        <tbody>

        {tableData.map((offer, i) => (
          <tr key={i}>
            <td>{offer.accomodation}</td>
            <td className='font-bold'>{formatCurrency(offer.price)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
