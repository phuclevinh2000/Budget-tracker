import './BigSideBar.scss';

import Navlinks from '../NavLinks/NavLinks';

const BigSidebar = () => {
  return (
    <aside>
      <div className='pg-bigsidebar-container'>
        <div className='pg-bigsidebar-content'>
          <header>
            <img
              src='./assets/images/logo-budget.png'
              alt='budget'
              className='pg-bigsidebar-logo'
            />
            <h1 className='pg-bigsidebar-title'>Pocket Guardian</h1>
          </header>
          <Navlinks />
        </div>
      </div>
    </aside>
  );
};

export default BigSidebar;
