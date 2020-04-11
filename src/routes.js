import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import AddCategory from './pages/AddCategory';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/DEPAPP" exact component={Main} />
        <Route path="/addcat" component={AddCategory} />
      </Switch>
    </BrowserRouter>
  );
}
