import { Outlet } from 'react-router-dom';

import './SharedLayout.scss';

import { BigSidebar, SmallSidebar, Navbar } from '../../../components';

const SharedLayout = () => {
  return (
    <section>
      <main className='dashboard'>
        <BigSidebar />

        <div>
          <Navbar />
          <SmallSidebar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SharedLayout;
