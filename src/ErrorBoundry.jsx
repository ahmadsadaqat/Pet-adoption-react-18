import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //typically you would log this somthing liike trackJS or NewRelic
    console.error("ErrorBoundary component cought an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
