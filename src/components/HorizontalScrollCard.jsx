import React, { useRef } from "react";
import Card from '../components/Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";



const HorizontalScrollCard = ({ data = [], heading,trending, media_type }) => {

  const containerRef = useRef()


  const handleNext =()=>{
    containerRef.current.scrollLeft += 300;
  }

  const handlePrev =()=>{
    containerRef.current.scrollLeft -= 300;
  }


  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold text-white mb-3">
       {  heading}
      </h2>
      <div className="  relative">
          <div ref={containerRef} className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll scrolbar-none relative z-10 scroll-smooth transition-all">
              {data.map((data, index) => {
                  return (
                      <Card
                        key={data.id+"heading"+index}
                        data={data}
                        index={index + 1}
                        trending={trending}
                        media_type={media_type}
                      />
                  );
                })
              }
          </div>

          <div className="absolute top-0 w-full hidden lg:flex justify-between h-full items-center">
            <button className="bg-white p-1 text-black rounded-full -ml-2 z-10" onClick={handlePrev}>
                  <FaAngleLeft/>
            </button>
            <button className="bg-white p-1 text-black rounded-full -mr-2 z-10" onClick={handleNext}>
                  <FaAngleRight/>
            </button>
          </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
