import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global';
import { MatchJobDeveloperProvider } from './hooks/index';

const App = (): React.ReactElement => {
  return (
    <MatchJobDeveloperProvider>
      <Routes />
      <GlobalStyles />
    </MatchJobDeveloperProvider>
  );
};

export default App;
