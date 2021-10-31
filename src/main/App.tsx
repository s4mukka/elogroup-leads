import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';

import Routes from './Routes';

import { GlobalStyles } from '../styles';

const App = (): JSX.Element => (
  <DndProvider backend={HTML5Backend}>
    <GlobalStyles />
    <Toaster />
    <Routes />
  </DndProvider>
);

export default App;
