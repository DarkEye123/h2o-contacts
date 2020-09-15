import React from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Read from './views/Read';

const Home = (props: RouteComponentProps) => <Read></Read>;

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
