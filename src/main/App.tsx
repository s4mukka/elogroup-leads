import { Toaster } from 'react-hot-toast';

import Routes from './Routes';

import { GlobalStyles } from '../styles';

const App = (): JSX.Element => (
  <>
    <GlobalStyles />
    <Toaster />
    <Routes />
  </>
);

export default App;
