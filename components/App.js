import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResourceList from './ResourceList';
import ResourceDetail from './ResourceDetail';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={ResourceList} />
        <Route path="/:resourceId" exact component={ResourceDetail} />
      </Router>
    </div>
  )
}

export default App;
