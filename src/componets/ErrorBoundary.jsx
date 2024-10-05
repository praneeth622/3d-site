import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console or an error tracking service
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is encountered
      return <h1>Something went wrong while loading 3D elements.</h1>;
    }
    // Render children if no error
    return this.props.children; 
  }
}
