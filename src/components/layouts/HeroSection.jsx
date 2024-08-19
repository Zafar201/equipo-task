import  { useMemo } from 'react';
import Frame from "../../images/frame.png";
import celo from "../../images/celo.png";
import medal from "../../images/medal.png";
import star from "../../images/star.png";
import chart from '../../images/chart.png';
import CardWidget from "../shared/CardWidget";
import Testimonial from "../shared/Testimonial";
import SalesStatisticsChart from "../charts/SalesStatisticsChart";
import Skeleton from "react-loading-skeleton";
import { useFirebaseData } from "../../customeHook/useFirebaseData";
import { fetchStatistics, fetchTestimonial, fetchWidget } from "../../services/firebaseService";

const HeroSection = () => {
  const { data: widgetData, loading: widgetLoading, error: widgetError } = useFirebaseData(() => fetchWidget("Dn7FuS2sNH8DtRxVz4NX"));
  const { data: statisticsData, loading: statisticsLoading, error: statisticsError } = useFirebaseData(fetchStatistics, []);
  const { data: testimonialData, loading: testimonialLoading, error: testimonialError } = useFirebaseData(fetchTestimonial, []);

  const heroBackgroundStyle = useMemo(() => ({
    backgroundImage: `url(${Frame})`,
  }), []);


  //main componenet 
  const renderBanner = () => (
    <div className="w-2/3 pr-8 flex flex-col main-div">
      <div
        className="bg-cover bg-center p-8 rounded-lg flex-1"
        style={heroBackgroundStyle}
      >
        <p className="mb-4 font-normal text-lg leading-6 w-3/5">
          All the features you need in one App for any kind of your
          business 🚀
        </p>
        <h1 className="font-medium text-[64px] leading-[76px] text-white">
          Manage your restaurant business so advanced
        </h1>
        <button className="bg-[#FF5C00] text-white px-6 py-3 rounded-full flex items-center mt-[31px]">
          Get Started for Free
        </button>
      </div>
    </div>
  );


  //widget compoenent
  const renderWidgets = () => (
    <div className="w-1/3 flex flex-col flex-wrap widget-card">
      <CardWidget
        backgroundColor="bg-[#F8F9FD]"
        textColor="text-black"
        showBadge={true}
        badgeProps={{
          imgSrc: chart,
          imgAlt: "chart",
          imgBackgroundColor: "bg-black",
          divBackgroundColor: "bg-white",
          textColor: "text-black",
          text: 'Sales Statistics',
          width:'w-[200px]'
        }}
      >
        <SalesStatisticsChart 
          statisticsData={statisticsData} 
          loading={statisticsLoading} 
          error={statisticsError}
        />
      </CardWidget>

      <div className="flex space-x-6 widget-cards">
        <CardWidget
          backgroundColor="bg-[#F2ECFF]"
          textColor="text-black"
          showBadge={true}
          badgeProps={{
            imgSrc: medal,
            imgAlt: "medal",
            imgBackgroundColor: "bg-black",
            divBackgroundColor: "bg-white",
            textColor: "text-black",
            text: 'Rating Review',
            width:'w-[200px]'
          }}
        >
          <p className="text-sm text-[#4D4E57] mb-4 mt-4 leading-5">
            Reviews of some of our app restaurant industry companies.
          </p>
          <div className="flex items-center justify-evenly absolute bottom-[8px]">
            {widgetLoading ? <Skeleton circle width={24} height={24} /> : <img src={star} alt="star" />} 
            <span className="text-4xl font-bold text-[48px] text-black">
              {widgetLoading ? <Skeleton width={60} /> : widgetError ? widgetError : widgetData?.rating}
            </span>
          </div>
        </CardWidget>

        <CardWidget
          backgroundColor="bg-[#6d6e6f]"
          textColor="text-white"
          showBadge={true}
          badgeProps={{
            imgSrc: celo,
            imgAlt: "celo",
            imgBackgroundColor: "bg-white",
            divBackgroundColor: "bg-[#222222]",
            textColor: "text-white",
            text: 'Total Partner',
            width:'w-[180px]'
          }}
        >
          <div className="absolute bottom-[8px]">
            {widgetLoading ? <Skeleton width={80} />  : widgetError ? widgetError :(
              <p className="text-[20px] font-medium">
              <span className="text-[48px] font-semibold">
                {widgetData?.patners?.split(' ')[0]}
              </span>
              Thousand
              </p>
            )}
           
          </div>
        </CardWidget>
      </div>
    
      <Testimonial 
        testimonialData={testimonialData} 
        loading={testimonialLoading} 
        error={testimonialError}
      />
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-4 py-8 flex main-hero">
        {renderBanner()}
        {renderWidgets()}
      </main>
    </div>
  );
};

export default HeroSection;