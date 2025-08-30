import React from "react";
import style from "./Comment.module.scss";

export const Comment = ({ data }) => {
  if (!data.comment) return null;
  return <p className={style.info}>{data.comment}</p>;
};
