import React from "react";
import style from "./Telephone.module.scss";
import { Phone } from "lucide-react";

export const Telephone = ({ data }) => {
  if (!data.telephone || data.telephone.length === 0) return null;
  return (
    <div>
      {data.telephone.map((tel, idx) => (
        <p key={idx} className={style.phone}>
          <Phone className={style.icon} />
          <a className={style.phone_number} href={`tel:${tel}`}>
            {tel}
          </a>
        </p>
      ))}
    </div>
  );
};
