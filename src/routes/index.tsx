import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MatchCandidates from '../pages/MatchCandidates';

const Routes: React.FC = () => {
  const notFoundPage = (): JSX.Element => (
    <h1 style={{ color: 'var(--black)' }}>Page not found</h1>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MatchCandidates} />
        <Route path="*" component={notFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
