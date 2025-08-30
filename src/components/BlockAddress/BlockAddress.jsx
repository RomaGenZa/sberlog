import style from './Blockaddress.module.scss'
import { ListAddress } from '../ListAddress/ListAddress'

export const BlockAddress = ({ dataObject, search, onSelectCard  }) => {
  return (
    <section className={style.container}>
      {dataObject.map((e, idx) => {
        const isActive = search && e.address.toLowerCase().includes(search.toLowerCase());
        return (
          <ListAddress
          key={idx} 
          address={e.address}
          telephone={e.telephone}
          comment={e.comment}
          isActive={isActive}
          onClick={() => onSelectCard?.(e)}
          />
        )
      })}
    </section>
  )
}
