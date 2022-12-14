import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { sliderItems } from "../utils/data";

const Slider = ({ executeScroll }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (side) => {
    if (side === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }


  return (
    <div className="slider w-screen relative overflow-hidden ms:hidden" style={{ height: "calc(100vh - 4rem)"}}>
      <span
        className="w-12	h-12 bg-slate-300 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-2.5 m-auto	cursor-pointer z-50 opacity-50 ms:hidden"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </span>

      {
        sliderItems.length > 0 ? (
          <div className="flex h-full w-full" style={{ transform: `translateX(${slideIndex * -100}vw)`, transition: "all 1.5s ease" }}>
            {
              sliderItems.map((el) => (
                <div key={el.id} className={`flex items-center ms:px-5`} style={{minWidth: "100vw", backgroundColor: el.bg }}>
                  <div className="w-2/4 h-full flex justify-center ms:hidden">
                    <img className="h-[85%]" alt="slider_image" src={el.img} />
                  </div>
                  <div className="w-2/4 p-12">
                    <div className="font-bold text-7xl uppercase ms:text-5xl">{el.title}</div>
                    <p className="uppercase my-12 text-xl font-medium break-all	w-4/5 ms:text-lg">{el.desc}</p>
                    <button onClick={executeScroll} className="p-2.5 cursor-pointer text-x 0l bg-transparent uppercase border-2 border-solid border-slate-500	">shop Now</button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : null
      }
      <span
        className="w-12	h-12 bg-slate-300 rounded-full flex items-center justify-center absolute top-0 bottom-0 right-2.5 m-auto cursor-pointer opacity-50 ms:hidden"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </span>
    </div>
  )
}

export default Slider;                                                                                              