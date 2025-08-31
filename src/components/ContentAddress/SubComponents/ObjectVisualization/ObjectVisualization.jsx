import React, { useRef } from "react"
import style from "./ObjectVisualization.module.scss"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const ObjectVisualization = ({ data }) => {
  const scrollRef = useRef(null)

  if (!data.image || data.image.length === 0) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className={style.wrapper}>
      <button className={style.arrow + " " + style.left} onClick={() => scroll("left")}>
        <ChevronLeft size={24} />
      </button>

      <div ref={scrollRef} className={style.carousel}>
        {data.image.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${data.address} фото ${idx + 1}`}
            className={style.image}
          />
        ))}
      </div>

      <button className={style.arrow + " " + style.right} onClick={() => scroll("right")}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
