import './SmallSidebar.scss';

import Navlinks from '../NavLinks/NavLinks';
import { IncomingSmallSidebar } from '../../types/types';

const SmallSidebar = ({ isShowSmallSideBar }: IncomingSmallSidebar) => {
  return (
    <div className='pg-smallsidebar-container'>
      <div
        className={`pg-smallsidebar-content ${isShowSmallSideBar && 'active'}`}
      >
        <header>
          <img
            src='./assets/images/logo-budget.png'
            alt='budget'
            className='pg-smallsidebar-logo'
          />
          <h1 className='pg-smallsidebar-title'>Pocket Guardian</h1>
        </header>
        <Navlinks />
      </div>
    </div>
  );
};

export default SmallSidebar;
