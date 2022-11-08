import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './Navbar.scss';

import { IncomingNavbar } from '../../types/types';

const Navbar = ({
  isShowSmallSideBar,
  setIsShowSmallSidebar,
}: IncomingNavbar) => {
  const myWallet = useSelector((state: RootState) => state.expenseData.wallet);
  return (
    <div className='pg-navbar'>
      <div className='pg-navbar-save-space'>
        <img
          src='./assets/icons/notifications/notifications-global.png'
          alt='global'
        />
        <div className='pg-navbar-total'>
          <p className='pg-navbar-total-title'>Total</p>
          <p className='pg-navbar-total-calculate'>
            {myWallet.cash + myWallet.card} $
          </p>
        </div>
      </div>
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
