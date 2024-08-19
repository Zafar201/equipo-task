import PropTypes from 'prop-types';
import useMediaQuery from '../../customeHook/useMediaQuery'

const FeatureCards = ({  index,title, description,  image }) => {
  const isDesktop = useMediaQuery('(min-width: 1000px)');
   return(
    <div className={`feature-card flex flex-col p-[40px] md:flex-row items-stretch bg-[#F8F9FD] rounded-[20px] overflow-hidden mb-8  ${isDesktop && index % 2 === 1 && 'reverse'}`}>
      <div className="rounded-lg m-4">
        <img src={image} alt='screen' />
      </div>
    <div className="w-full md:w-2/3 p-8 flex flex-col">
      <h3 className="text-2xl mb-4 text-gray-800 font-[Poppins] text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-left">{title}</h3>
      <p className="text-[#4D4E57] mb-6 font-[Poppins] text-[22px] font-normal leading-[25.2px] text-left flex-grow">{description}</p>
      <div className="flex space-x-4 mt-auto">
        <button className="bg-[#FF5C00] text-white py-2 px-[24px] gap-[8px] rounded-full text-[16px] hover:bg-orange-600 transition duration-300 ">
          Launch Demo
        </button>
        <button className="bg-white text-gray-800 px-6 py-2 gap-[8px] rounded-full border-gray-300 hover:bg-gray-100 transition duration-300">
          More Info
        </button>
      </div>
    </div>
 
  </div>
   )
}
  



FeatureCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool,
  image: PropTypes.string.isRequired,
  index:PropTypes.number.isRequired
};

export default FeatureCards;