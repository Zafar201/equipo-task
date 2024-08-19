import PricingPlans from "../components/PricingPlans"
import PageBanner from "../components/shared/PageBanner"

function PricingPage() {
  return (
    <div>
        <PageBanner title='Pricing'/>
        
        <PricingPlans/>
    </div>
  )
}

export default PricingPage