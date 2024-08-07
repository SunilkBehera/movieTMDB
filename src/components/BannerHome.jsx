import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {

  const bannerData =  useSelector(state => state.movieoData.bannerData)
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const [currentImage, setCurrentImage] = useState(0)
  
  const handleNext = () =>{
    if(currentImage < bannerData.length - 1){
      setCurrentImage(pre => pre + 1)
    }
  }

  const handlePrev = () =>{
    if(currentImage > 0){
      setCurrentImage(pre => pre - 1)
    }
  }


  useEffect(()=>{
    const interval = setInterval(()=>{
      if(currentImage < bannerData.length - 1){
        handleNext()
      }else{
        setCurrentImage(0)
      }
    },5000)

    return()=>clearInterval(interval)
},[bannerData, imageURL])

  //console.log("Banner Home", bannerData);
 

  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data,index)=>{
            // console.log("data", data);
            return (
              <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden transition-all relative group'
              style={{transform: `translateX(-${currentImage * 100}%)`}}
              >
                    <div className='w-full h-full'>
                      <img src={imageURL+data.backdrop_path} alt="" 
                      className='h-full w-full object-cover'
                      />
                    </div>

                    <div className='absolute top-0 w-full h-full px-4 hidden items-center justify-between group-hover:lg:flex'>
                      <button onClick={handlePrev} className='bg-white p-1 rounded-full text-2xl z-10 text-black font-bold'>
                        <FaAngleLeft />
                      </button>
                      <button onClick={handleNext} className='bg-white p-1 rounded-full text-2xl z-10 text-black font-bold'>
                        <FaAngleRight />
                      </button>
                    </div>



                    <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>

                    <div className='container mx-auto '>
                      <div className='absolute bottom-0 max-w-md px-3'>
                        <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                        <p className='text-ellipsis line-clamp-3 text-justify my-2'>{data.overview}</p>

                        <div className='flex items-center gap-4'>
                          <p>{Number (data.vote_average).toFixed(1)} +</p>
                          <span> | </span>
                          <p>View : {Number (data.popularity).toFixed(0)}</p>
                        </div>
                        <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 shadow-md transition-all hover:scale-105 hover:bg-gradient-to-t from-red-500 to-orange-500'>
                          Play Now
                        </button>
                      </div>
                    </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome