import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeLeads, makeNewLead, makeRegisterUser } from './factories';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={makeRegisterUser} />
      <Route path="/leads" exact component={makeLeads} />
      <Route path="/leads/new" exact component={makeNewLead} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
