import style from './ListAddress.module.scss'
import { useEffect, useRef } from 'react'

export const ListAddress = ({address, telephone1, telephone2, isActive, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [isActive]);
  return (
    <div ref={cardRef} onClick={onClick} className={`${style.list_address} ${isActive ? style.active : ""}`}>
      <p className={style.address_head}>{address}</p>
      <a className={style.list_tel} href={`tel:${telephone1}`} onClick={(e) => e.stopPropagation()}>{telephone1}</a>
      <a className={style.list_tel} href={`tel:${telephone2}`} onClick={(e) => e.stopPropagation()}>{telephone2}</a>
    </div>
  )
}
