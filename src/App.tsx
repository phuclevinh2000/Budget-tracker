import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';

import './App.scss';

import {
  SharedLayout,
  Home,
  Transactions,
  FutureIdea,
  AddExpense,
  Setting,
} from './pages/dashboard';
import { ConnectTool } from './components';
import { Error } from './pages';

function App() {
  const darkMode = useSelector(
    (state: RootState) => state.settingData.darkMode
  );
  return (
    <div className={darkMode && 'dark'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='add' element={<AddExpense />} />
            <Route path='setting' element={<Setting />} />
            <Route path='future' element={<FutureIdea />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
        <ConnectTool />
      </BrowserRouter>
    </div>
  );
}

export default App;
