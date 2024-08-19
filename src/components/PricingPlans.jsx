import  { Fragment, useState } from 'react';
import { Minus } from 'lucide-react';
import blue from '../images/blue.png'
import purple from '../images/purple.png'
import green from '../images/green.png'
import { featureAvailability, features, plans } from '../contants';
const PricingPlans = () => {
  // const isDesktop = useMediaQuery('(min-width: 200px)');
  const [isAnnual, setIsAnnual] = useState(false);


  const handleMonthlyClick = () => setIsAnnual(false);
  const handleYearlyClick = () => setIsAnnual(true);
  const monthlyClassName = !isAnnual ? 'text-white bg-black tab-actives' : 'text-black';
  const yearlyClassName = isAnnual ? 'text-white bg-black tab-actives' : 'text-black';

  const image = (colIndex)=>{
    return colIndex === 0 ? green : colIndex ===1 ? blue : purple
  }

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white text-gray-300 pricing-section mt-[50px] mb-[50px]">
    
      <Fragment>
      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-16">
        <h1 className="font-[Poppins] text-[64px] font-medium leading-[64px]  text-left text-black">Packages for your business</h1>
        
        <div className="flex items-center space-x-2">
          <div role="tablist" className="tabs tabs-boxed bg-[#F8F9FD] rounded-[50px]">
            <a role="tab" className={`tab rounded-[50px]! ${monthlyClassName}`} onClick={handleMonthlyClick}>Monthly</a>
            <a role="tab" className={`tab rounded-[50px]! ${yearlyClassName}`} onClick={handleYearlyClick}>Yearly</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 text-sm">
        <div className="col-span-1"></div>
        {plans.map((plan, index) => (
          <div key={index} className={`${plan.color} rounded-tl-[1.5rem] rounded-tr-[1.5rem] relative m-[0.5rem] mt-0 mb-0 mr-[0.5rem] ml-[0.5rem]`}>
            {plan.bestChoice && (
              <div className="absolute top-0 right-0 bg-[#FF5C00] text-white px-2 py-1 text-xs rounded-bl-lg rounded-tr-lg choice">
                Best choice
              </div>
            )}
            <div className='rounded-[20px] mb-2 p-[24px] px-[32px] bg-[#E0F2D4] mobile-header'>
            <h2 className="font-bold text-center text-lg   border-2 border-t-0 border-[#E0F2D4]  text-[#38715B]">{plan.name}</h2>
            </div>
            <div className='text-center p-4 price' >
            <p className="text-3xl font-bold text-black">
              ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-base font-normal">/{isAnnual ? 'year' : 'month'}</span>
            </p>
            </div>
          
          </div>
        ))}

        {features.map((feature, rowIndex) => (
          <Fragment key={rowIndex}>
            <div className="p-4 font-medium border-t text-black"><h3 className='text-[16px]'>{feature}</h3></div>
            {featureAvailability[rowIndex].map((available, colIndex) => (
              <div key={colIndex} className={`${plans[colIndex].color} p-4 flex justify-center  items-center border-t mr-2 ml-2`}>
                {available ?<img src={image(colIndex)} alt='tick'/> : <Minus size={20} className="text-gray-400" />}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
    </Fragment>
    </div>
  );
};

export default PricingPlans;