import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Register } from './views';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
