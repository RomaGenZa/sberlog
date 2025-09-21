import React from 'react'
import style from './Head.module.scss'
import { Layers } from "lucide-react"
import toast, { Toaster } from "react-hot-toast";


export const Head = ({objectAddress}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(objectAddress.address)
      .then(() => toast.success("Адрес скопирован"))
      .catch(() => toast.error("Ошибка копирования"));
  }

  return (
    <div className={style.headWrapper}>
      <h2 className={style.address_head}>{objectAddress.address}</h2>
      <button className={style.copyBtn} onClick={copyToClipboard} title="Скопировать адрес">
        <Layers size={18} />
      </button>
      <Toaster position="top-right" />
    </div>
  )
}

