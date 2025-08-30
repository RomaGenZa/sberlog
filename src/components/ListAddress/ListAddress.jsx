import style from './ListAddress.module.scss'

export const ListAddress = ({address, telephone, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.list_address} ${isActive ? style.active : ""}`}
    >
      <p>{address}</p>
      
      {telephone.map((tel, idx) => (
        <a
          key={idx}
          className={style.list_tel}
          href={`tel:${tel}`}
          onClick={(e) => e.stopPropagation()}
        >
          {tel}
        </a>
      ))}
    </div>
  )
}
