import React from 'react'
import style from './Blockaddress.module.scss'
import { ListAddress } from '../ListAddress/ListAddress'
// import { data } from '../../data/data'

export const BlockAddress = ({ dataObject, search, onSelectCard  }) => {
  return (
    <section className={style.container}>
      {dataObject.map((e, idx) => {
        const isActive = search && e.address.toLowerCase().includes(search.toLowerCase());
        return (
          <ListAddress
          key={idx} 
          address={e.address}
          telephone1={e.telephone1}
          telephone2={e.telephone2}
          comment={e.comment}
          isActive={isActive}
          onClick={() => onSelectCard?.(e)}
          />
        )
      })}
    </section>
  )
}
