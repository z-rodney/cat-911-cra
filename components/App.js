import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';

const App = () => {
  return (
    <div>
      <Router>
        <Route component={ResourceList} />
        <Route path="/:resourceId" component={ResourceDetail} />
      </Router>
    </div>
  )
}

export default App;
