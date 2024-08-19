import { featuresList } from '../../contants';
import FeatureCards from '../shared/FeatureCards';


const BusinessFeatures = () => {


  return (
    <div className='bg-white business-feature'>   
         <div className="container mx-auto px-4 py-12 bg-white">
      <h2 className="mb-12 text-gray-800 font-[Poppins] text-[64px] font-medium leading-[76.8px] tracking-[-0.03em] text-left w-[60%]">Complementary features for your business needs</h2>
      <div className="space-y-12">
        {featuresList.map((feature, index) => (
          <FeatureCards key={index} {...feature} index={index}/>
        ))}
      </div>
    </div>
    </div>

  );
};

export default BusinessFeatures;