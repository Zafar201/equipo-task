import Pos from '../../images/Pos.png';
import top from '../../images/top.png';
import left from '../../images/left.png';
import bottom from '../../images/bottom.png';
import arrow from '../../images/arrow.png'

const POSHeroSection = () => {
  return (
    <div className="text-white max-h-[130vh] h-[130vh] flex items-center justify-center relative overflow-hidden mt-[14px] mr-[32px] ml-[32px] pos-hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-xl"
        style={{ 
          background: 'linear-gradient(180deg, #19191C 0%, #232329 100%)'
        }}
      ></div>
            <div 
          className="container mx-auto px-4 text-center absolute z-50" 
          style={{ top: '150px' }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Gain Excellence with the Best POS Solutions
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Provide an unforgettable customer experience with fast ordering,
            convenient payments, and better service.
          </p>
          <div className='flex justify-center'>     
        <button className="bg-[#FF5C00] text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 flex items-center justify-center">
          Try for free  
          <span className="ml-2 bg-white rounded-full p-1 inline-flex items-center">
            <img src={arrow} alt="Arrow" />
          </span>
        </button>
        </div>



        </div>

      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[75%] z-1">
        <img src={Pos} alt="pos" className="w-full h-auto" />
      </div>
      
      <div className="absolute top-0 right-0 w-1/5">
        <img src={top} alt="top" className="w-full h-auto" />
      </div>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/5">
        <img src={left} alt="left" className="w-full h-auto" />
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/5 z-10">
        <img src={bottom} alt="bottom" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default POSHeroSection;