import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import {
  SharedLayout,
  Home,
  Transactions,
  Budget,
  AddExpense,
} from './pages/dashboard';
import { Error } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='add' element={<AddExpense />} />
          <Route path='budgets' element={<Budget />} />
        </Route>
        {/* <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
