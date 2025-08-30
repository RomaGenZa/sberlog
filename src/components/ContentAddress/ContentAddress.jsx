import style from "./ContentAddress.module.scss"
import { Head } from './SubComponents/Head/Head'
import { Telephone } from './SubComponents/Telephone/Telephone'

export const ContentAddress = ({ data, onClose }) => {
  
  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.popup} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeBtn} onClick={onClose}>
          ✖
        </button>
        <Head objectAddress={data}/>
        <Telephone data={data}/>

        {data.comment && (
        <p className={style.info}>
          {data.comment}
        </p>
        )}
      </div>
    </div>
  );
};
