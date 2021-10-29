import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Leads } from '../views';
import { makeRegisterUser } from './factories';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={makeRegisterUser} />
      <Route path="/leads" exact component={Leads} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
