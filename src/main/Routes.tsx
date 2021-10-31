import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Leads } from '../views';
import NewLead from '../views/NewLead';
import { makeRegisterUser } from './factories';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={makeRegisterUser} />
      <Route path="/leads" exact component={Leads} />
      <Route path="/leads/new" exact component={NewLead} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
