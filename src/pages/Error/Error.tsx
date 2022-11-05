import { Link } from 'react-router-dom';

import './Error.scss';

const Error = () => {
  return (
    <main className='error-full-page'>
      <div>
        <img src='./assets/images/not-found.svg' alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </main>
  );
};

export default Error;
