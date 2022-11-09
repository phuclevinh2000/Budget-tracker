import { useState } from 'react';
import moment from 'moment';

import './TransactionViewDetailReport.scss';

import TransactionViewDetailReportModal from '../TransactionViewDetailReportModal/TransactionViewDetailReportModal';

const TransactionViewDetailReport = ({ singleTransaction }: any) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='pg-transaction-detail-report'>
      <TransactionViewDetailReportModal
        singleTransaction={singleTransaction}
        open={openModal}
        setOpen={setOpenModal}
      />
      <div
        onClick={() => setOpenModal(true)}
        className='pg-transaction-expense-report-group'
      >
        <span>
          <img
            src={singleTransaction.category.iconSrc}
            alt='wallet'
            className='pg-transaction-expense-report-icon'
          />
          <div className='pg-transaction-expense-report-info'>
            <h3>{singleTransaction.category.value}</h3>
            <p>
              {moment(singleTransaction.date.value, 'DD-MM-YYYY').format(
                'dddd'
              )}
            </p>
            <p>{singleTransaction.date.value}</p>
          </div>
        </span>
        <p
          className={`pg-transaction-expense-report-money ${singleTransaction.category.operation}`}
        >
          {singleTransaction.amount.value} $
        </p>
      </div>
    </div>
  );
};

export default TransactionViewDetailReport;
