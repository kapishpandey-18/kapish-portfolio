import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
            <h2 className="mt-4 text-2xl font-semibold">Something went wrong</h2>
            <p className="mt-4 text-neutral-400 max-w-md mx-auto">
              The application encountered an unexpected error. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-6 text-left bg-neutral-900 p-4 rounded-lg max-w-2xl mx-auto">
                <summary className="cursor-pointer text-sm text-red-400 mb-2">
                  Error Details
                </summary>
                <pre className="text-xs text-neutral-300 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="mt-8 flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="rounded-md bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-500/90 transition-colors"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="rounded-md border border-neutral-700 px-6 py-3 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
