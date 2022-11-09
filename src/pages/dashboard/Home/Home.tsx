import './Home.scss';

import {
  HomeViewBalanceBox,
  HomeViewReportGraph,
  HomeViewTransactionBox,
} from '../../../components';

const Home = () => {
  return (
    <div className='pg-home'>
      <div className='pg-home-balance'>
        <HomeViewBalanceBox />
      </div>
      <div className='pg-home-recent-transaction'>
        <HomeViewTransactionBox />
      </div>
      <div className='pg-home-report'>
        <HomeViewReportGraph />
      </div>
    </div>
  );
};

export default Home;
