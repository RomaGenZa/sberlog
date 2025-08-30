import React from "react";
import style from "./ObjectVisualization.module.scss";

export const ObjectVisualization = ({ data }) => {
  if (!data.image || data.image.length === 0) return null;

  return (
    <div className={style.visualWrapper}>
      {data.image.map((img, idx) => (
        <img key={idx}
          src={img}
          alt={`${data.address} фото ${idx + 1}`}
          className={style.visual}
        />
      ))}
    </div>
  );
};
