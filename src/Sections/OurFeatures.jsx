import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CardFeature from '../Components/CardFeature'

const OurFeatures = () => {
  const sliderRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 10,
    beforeChange: (current, next) => setActiveSlide(next),
  }

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }

  return (
    <div className="bg-[#F4F4F4] py-5 flex flex-col">
      <div className="mb-5 px-4">
        <h2 className="font-medium font-aeonik text-4xl w-[260px] pt-2">
          Our Features Special For You
        </h2>
        <p className="font-extralight w-[199px] mt-4">
          We provide various special features for all of you
        </p>
      </div>
      <div className="pl-4">
        <Slider {...settings} ref={sliderRef} className="custom-slider">
          <div className="slick-slide">
            <CardFeature />
          </div>
          <div className="slick-slide">
            <CardFeature />
          </div>
          <div className="slick-slide">
            <CardFeature />
          </div>
        </Slider>
      </div>
      <div className="flex mt-16 mb-14 m-auto gap-4">
        <div
          className={`button1 w-[51px] h-[11px] ${
            activeSlide === 0 ? 'bg-[#DDF247] w-[100px]' : 'bg-gray-300'
          }`}
          onClick={() => goToSlide(0)}
        />
        <div
          className={`button2 w-[51px] h-[11px] ${
            activeSlide === 1 ? 'bg-[#DDF247] w-[100px]' : 'bg-gray-300'
          }`}
          onClick={() => goToSlide(1)}
        />
        <div
          className={`button3 w-[51px] h-[11px] ${
            activeSlide === 2 ? 'bg-[#DDF247] w-[100px]' : 'bg-gray-300'
          }`}
          onClick={() => goToSlide(2)}
        />
      </div>
    </div>
  )
}

export default OurFeatures
