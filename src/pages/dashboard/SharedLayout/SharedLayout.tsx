import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import './SharedLayout.scss';

import { BigSidebar, SmallSidebar, Navbar } from '../../../components';

const SharedLayout = () => {
  const [isShowSmallSideBar, setIsShowSmallSidebar] = useState(false);

  return (
    <section>
      <main className='dashboard'>
        <BigSidebar />

        <div>
          <Navbar
            isShowSmallSideBar={isShowSmallSideBar}
            setIsShowSmallSidebar={setIsShowSmallSidebar}
          />
          <SmallSidebar isShowSmallSideBar={isShowSmallSideBar} />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};

export default SharedLayout;
