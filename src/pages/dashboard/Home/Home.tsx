import './Home.scss';

import {
  BalanceBox,
  HomeReport,
  TransactionBoxHomePage,
} from '../../../components';

const Home = () => {
  return (
    <div className='pg-home'>
      <div className='pg-home-balance'>
        <BalanceBox />
      </div>
      <div className='pg-home-recent-transaction'>
        <TransactionBoxHomePage />
      </div>
      <div className='pg-home-report'>
        <HomeReport />
      </div>
    </div>
  );
};

export default Home;
