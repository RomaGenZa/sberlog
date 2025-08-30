import React from "react";
import style from './FormStart.module.scss' 

export const FormStart = () => {
  return (
    <form className={style.password} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">
        <input type="text" />
      </label>
    </form>
  );
};
