import { Fragment } from 'react'
import screen from '../../images/screen.png'

// eslint-disable-next-line react/prop-types
function FeatureCard({ side }) {
    const alignment = side === 'left' ? 'justify-start' : 'justify-end';
    return (
      <Fragment>
        <div className={`flex ${alignment} items-center space-x-4`}>
          <img src={screen} alt="" className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </Fragment>
    );
  }
  

export default FeatureCard