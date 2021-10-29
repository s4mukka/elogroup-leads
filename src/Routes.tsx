import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Register, Leads } from './views';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/leads" exact component={Leads} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
