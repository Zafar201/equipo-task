import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';



class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true ,error:error};
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // render fallback UI when error occuerd
    
      return (
        <Fragment>
  <div className="min-h-screen flex flex-col items-center justify-center text-red-500 text-lg font-bold">
    <h1>Something went wrong</h1>
    <div>
      <button 
        onClick={() => window.location.href='/'} 
        className='bg-orange-500 rounded-[50px] text-white p-4 mt-4'
      >
        Refresh
      </button>
    </div>
  </div>
</Fragment>


      )
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node, 
  };

export default ErrorBoundary;
