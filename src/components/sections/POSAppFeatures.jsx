import driver from '../../images/driver.png'
import box from '../../images/box.png'
import trend from '../../images/trend.png'
import money from '../../images/money.png'
import setting from '../../images/setting.png'
import security from '../../images/security.png'
import PropTypes from 'prop-types'
import useMediaQuery from '../../customeHook/useMediaQuery';

// FeatureItem Component
const FeatureItem = ({ img, title, description }) => (
  <div className="mb-6">
    <img className='bg-[#F8F9FD] p-[7px] rounded-[41px] h-[46px]' src={img} alt={title} />
    <h3 className="text-lg mb-1 font-[Poppins] text-[24px] font-medium leading-[36px] tracking-[-0.01em] text-left text-[#19191C]">{title}</h3>
    <p className="text-[16px] font-normal leading-[18px] tracking-[-0.01em] text-left text-[#4D4E57]">{description}</p>
  </div>
);

FeatureItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

// Testimonial Component
const Testimonial = ({ content, author, role, bgColor, color, width }) => (
  <div className={`p-4 rounded-lg mb-4 ${bgColor} ${width}`}>
    <p className={`mb-3 ${color} font-[Poppins] text-[20px] font-medium leading-[28px] text-left p-[2px]`}>{content}</p>
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
      <div>
        <p className={`font-semibold text-sm ${color}`}>{author}</p>
        <p className={`text-xs ${color}`}>{role}</p>
      </div>
    </div>
  </div>
);

Testimonial.propTypes = {
  content: PropTypes.any,
  author: PropTypes.string,
  role: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};



const POSAppFeatures = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1200px)');

  return (
    <div className='bg-white mt-[72px] mb-[72px]'>
    <div className="max-w-[80%] mx-auto p-8 flex feature">
        <div>
      <h1 className="mb-6 text-[#19191C] text-[64px] font-medium leading-[76.8px] tracking-[-0.03em] w-[454px]">Ease in the Hand</h1>
      <p className=" mb-8 font-[Poppins] text-[18px] font-normal leading-[28px] tracking-[-0.01em] text-left text-[#4D4E57]">
        Using our app in business, especially in the restaurant industry,
        has many advantages. Here are some of them:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FeatureItem
            img={setting}
            title="Operational efficiency"
            description="Automate ordering, payment and stock management."
          />
          <FeatureItem
            img={security}
            title="Security data"
            description="Strong security to protect your customer and business data."
          />
          <FeatureItem
            img={box}
            title="Stock management"
            description="Track stock in real-time and avoid stock outs or wastage."
          />
        </div>
        <div>
          <FeatureItem
            img={driver}
            title="Easy to integrate"
            description="The integration process with third-party services runs easily."
          />
          <FeatureItem
            img={money}
            title="Manage financial"
            description="Better record all purchase transactions automatically."
          />
          <FeatureItem
            img={trend}
            title="Business Scalability"
            description="Easily add & upgrade according to your business growth."
          />
        </div>
      </div>
      </div>

      <div className="mt-2 ml-[90px] testimonial">
        <Testimonial
          content="We are very impressed with the use of this POS application. Management of orders and payments becomes faster and more accurate so as to increase our operational efficiency."
          author="John Smith"
          role="CEO at Restaurant Chain"
          bgColor="bg-[#F1FAEB]"
          color="text-[#38715B]"
          width={isSmallScreen ? 'w-100' : 'w-[421px]'}
        />
        <Testimonial
          content="The use of this application has given our company efficiency and accuracy in managing orders and payments."
          author="Jane Doe"
          role="Business Owner at Fast Food Franchise"
          bgColor="bg-[#ECF6FF]"
          color="text-[#3871A5]"
          width={isSmallScreen ? 'w-100' : 'w-[421px]'}

        />
        <Testimonial
          content="We are pleased with the flexibility of this company's POS application. We can easily adapt our menu, prices and promotions according to market needs."
          author="Bob Johnson"
          role="Product Owner at Food Service Company"
          bgColor="bg-[#FFF5EE]"
          color="text-[#DC8558]"
          width={isSmallScreen ? 'w-100' : 'w-[421px]'}
          
        />
      </div>
    </div>
    </div>
  );
};

export default POSAppFeatures;