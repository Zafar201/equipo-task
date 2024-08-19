import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types'
function Testimonial({testimonialData,loading}) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      // Change slide every 5 seconds
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); 
      return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [testimonialData]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % testimonialData?.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + testimonialData?.length) % testimonialData?.length);
    };

  
  return (
    <div> 
       <div className="bg-orange-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
    <div className="mb-4">
      <p className="text-[#FF5C00] text-[24px] font-medium leading-[28px]">
        {loading ? <Skeleton/> :  testimonialData[currentSlide]?.text}
      </p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <p className="font-bold text-gray-800">{loading ? <Skeleton/> : testimonialData[currentSlide]?.author}</p>
          <p className="text-sm text-gray-600">{loading ? <Skeleton/> :  testimonialData[currentSlide]?.position}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={prevSlide} 
          className="p-2 rounded-full bg-orange-100 text-[#DC8558] hover:bg-orange-200 transition-colors"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide} 
          className="p-2 rounded-full bg-orange-100 text-[#FF5C00] hover:bg-orange-200 transition-colors"
        >
          ❯
        </button>
      </div>
    </div>
  </div></div>
  )
}

// Define PropTypes
Testimonial.propTypes = {
  testimonialData: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any, 
};

export default Testimonial