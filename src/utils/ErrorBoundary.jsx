import { Component } from 'react';
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
    // You can also log error and info to an error logging service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node, // or PropTypes.element if you want to be more specific
  };

export default ErrorBoundary;
