import './Home.scss';

import { BalanceBox, TransactionBox } from '../../../components';

const Home = () => {
  return (
    <div className='pg-home'>
      <div className='pg-home-balance'>
        <BalanceBox />
      </div>
      <div className='pg-home-recent-transaction'>
        <TransactionBox />
      </div>
      <div className='pg-home-report'>report</div>
    </div>
  );
};

export default Home;
