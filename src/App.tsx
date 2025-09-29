import React from 'react';
import { ErrorBoundary } from 'components';
import { MainRouter } from 'routes/MainRouter';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainRouter />
    </ErrorBoundary>
  );
};

export default App;
