import React from 'react'
import style from './Head.module.scss'

export const Head = ({objectAddress}) => {
  return (
    <h2 className={style.address_head}>{objectAddress.address}</h2>
  )
}
