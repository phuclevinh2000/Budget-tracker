import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

import { links } from '../../data/links';

const Navlinks = () => {
  return (
    <div className='pg-navlinks'>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          className={(navData: { isActive: any }) =>
            navData.isActive ? 'pg-navlinks-card active' : 'pg-navlinks-card'
          }
        >
          <img
            className='pg-navlinks-card-icon'
            src={`./assets/icons/buttons/${link.iconSrc}`}
            alt={link.text}
          />
          <p className='pg-navlinks-card-text'>{link.text}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
