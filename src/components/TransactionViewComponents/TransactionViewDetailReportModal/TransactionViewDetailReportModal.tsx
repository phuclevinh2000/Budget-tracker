import { useState } from 'react';
import moment from 'moment';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

import './TransactionViewDetailReportModal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ConfirmDeleteDialog from '../../CommonComponents/ConfirmDeleteDialog/ConfirmDeleteDialog';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TransactionViewDetailReportModal = ({
  singleTransaction,
  open,
  setOpen,
}: any) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const currencyIconSrc = useSelector(
    (state: RootState) => state.expenseData.currency.iconSrc
  );
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='modal-header'>
            <p className='modal-header-title'>Transaction details</p>
            <div className='modal-header-button'>
              <button
                onClick={() => setDeleteConfirmation(true)}
                className='modal-header-button-delete'
              >
                DELETE
              </button>
              <button
                onClick={() => {
                  handleClose();
                }}
                className='modal-header-button-close'
              >
                CLOSE
              </button>
            </div>
          </div>
          <div className='pg-modal-body'>
            <div className='pg-modal-body-left'>
              <img
                src={singleTransaction.category.iconSrc}
                alt={singleTransaction.category.value}
                className='pg-modal-body-icon'
              />
              <div className='pg-modal-body-category'>
                <h1>{singleTransaction.category.value}</h1>
                <p className='pg-modal-body-category-wallet'>
                  {singleTransaction.category.type}
                </p>
                <p className='pg-modal-body-category-wallet'>
                  {singleTransaction.wallet.value}
                </p>
                <p className='pg-modal-body-category-date'>
                  {moment(singleTransaction.date.value, 'DD-MM-YYYY').format(
                    'dddd'
                  )}
                  , {singleTransaction.date.value}
                </p>
                <div
                  className={`pg-modal-body-money ${singleTransaction.category.operation}`}
                >
                  {singleTransaction.category.operation === 'minus' ? '-' : ''}
                  {singleTransaction.amount.value}{' '}
                  <img
                    src={currencyIconSrc}
                    alt='currency'
                    className='pg-modal-body-money-icon'
                  />
                </div>
              </div>
            </div>

            <div className='pg-modal-body-note'>
              <p>
                {singleTransaction.note.value === ''
                  ? 'No note for this expense.'
                  : singleTransaction.note.value}
              </p>
            </div>
          </div>
          {deleteConfirmation && (
            <ConfirmDeleteDialog
              setDeleteConfirmation={setDeleteConfirmation}
              transactionId={singleTransaction.id}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionViewDetailReportModal;
