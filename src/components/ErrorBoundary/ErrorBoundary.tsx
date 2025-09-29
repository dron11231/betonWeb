import { Component, ReactNode } from 'react';
import { ErrorScreen } from './components';

interface IState {
  error: Error | null;
}

export class ErrorBoundary extends Component<{ children?: ReactNode }, IState> {
  constructor(props: { children?: ReactNode }) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { error: hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorScreen /> : children;
  }
}
