import React from "react";
import style from "./FormList.module.scss";

export const FormList = ({ search, setSearch }) => {

  return (
    <form className={style.head} onSubmit={(e) => e.preventDefault()}>
      <label className={style.header} htmlFor="search">
        Поиск ЦФЗ
      </label>
      <input
        className={style.input}
        type="text"
        id="search"
        name="search"
        placeholder="Введите адрес"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
