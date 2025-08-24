import React from "react";
import style from "./ContentAddress.module.scss"
import { Phone } from "lucide-react"

export const ContentAddress = ({ data, onClose }) => {
  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.popup} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2 className={style.address_head}>{data.address}</h2>

        <p className={style.phone}>
          <Phone size={18} color="green" className={style.icon} />
          <a className={style.phone_number} href={`tel:${data.telephone1}`}>{data.telephone1}</a>
        </p>

        <p className={style.phone}>
          <Phone size={18} color="green" className={style.icon} />
          <a className={style.phone_number} href={`tel:${data.telephone2}`}>{data.telephone2}</a>
        </p>

        <p className={style.info}>
          {data.comment}
        </p>
      </div>
    </div>
  );
};
