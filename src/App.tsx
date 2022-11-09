import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import {
  SharedLayout,
  Home,
  Transactions,
  FutureIdea,
  AddExpense,
} from './pages/dashboard';
import { ConnectTool } from './components';
import { Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='add' element={<AddExpense />} />
          <Route path='future' element={<FutureIdea />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ConnectTool />
    </BrowserRouter>
  );
}

export default App;
