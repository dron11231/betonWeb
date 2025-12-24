import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'components';
import { MainRouter } from 'routes/MainRouter';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
