import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'




const Card = ({data, trending, index, media_type}) => {
  const imageURL = useSelector(state => state.movieoData.imageURL)


  const mediaType = data.media_type ?? media_type

  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] rounded h-80 block overflow-hidden relative hover:scale-110 transition-all'>
      
      <img src={imageURL+data?.poster_path} alt="" />
        
        
        
        <div className='absolute top-4'>
        {
        trending && (
          <div className='py-1 px-4 bg-black/40 backdrop-blur-3xl rounded-r-full overflow-hidden'>
              #{index} Trending

          </div>
        )
      }
        </div>


        <div className='absolute bottom-0 backdrop-blur-3xl w-full bg-black/50 h-16 p-2'>
          <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
          <div className='text-sm text-neutral-400 flex justify-between items-center'>
            <p>{moment(data.release_date).format('MMMM Do YYYY')}</p>
            <p className='text-sm p-1 rounded-full text-green-500 font-bold bg-black'>{Number(data.vote_average).toFixed(1)}</p>
          </div>
        </div>
    </Link>
  )
}

export default Card