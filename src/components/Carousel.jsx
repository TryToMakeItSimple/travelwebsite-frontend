import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData =[
    
    {
        url:'https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/c_fill,w_750/w_1200/blogen/2018/04/image9.jpg'
    },
    
    {
        url:'https://a.cdn-hotels.com/gdcs/production138/d1824/ed0d5995-0902-43d1-9644-1aa7a1a27d81.jpg'
    },
    {
        url: 'https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2018/03/shutterstock_757257655.webp'

    },
    {
        url: 'https://images.summitmedia-digital.com/esquiremagph/images/2021/01/06/boracay-palaawn-best-beaches-islands-main.jpg'

    },
    {
        url: 'https://static.independent.co.uk/2023/05/18/15/iStock-1202495772.jpg?quality=75&width=1200&auto=webp'

    },

];

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length


    const prevSlide  = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowRightSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        <BsArrowLeftSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
            
        </div>
      ))}
    </div>
  )
}

export default Carousel
