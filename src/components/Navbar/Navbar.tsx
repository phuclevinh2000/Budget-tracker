import './Navbar.scss';

import { IncomingNavbar } from '../../types/types';

const Navbar = ({
  isShowSmallSideBar,
  setIsShowSmallSidebar,
}: IncomingNavbar) => {
  return (
    <div className='pg-navbar'>
      <div className='pg-navbar-save-space'></div>
      <h3 className='pg-navbar-text'>dashboard</h3>
      <span className='pg-navbar-user'>
        <img
          src='./assets/icons/notifications/notifications-profile-logo.png'
          alt='user'
        />
        <p className='pg-navbar-user-name'>user</p>
      </span>
    </div>
  );
};

export default Navbar;
