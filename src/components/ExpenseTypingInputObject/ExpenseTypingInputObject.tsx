import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './ExpenseTypingInputObject.scss';

const ExpenseTypingInputObject = ({
  title,
  type,
  iconSrc,
  dataCallback,
}: any) => {
  const dispatch = useDispatch();
  const [note, setNote] = useState('');

  const handleChange = (e: any) => {
    e.preventDefault();
    setNote(e.target.value);

    const InputData = {
      title: title,
      type: type,
      value: e.target.value,
    };

    dataCallback(InputData);
  };

  useEffect(() => {}, [dispatch, note]);

  return (
    <div className='pg-expense-input-object'>
      <p className='pg-expense-input-object-title'>{title}</p>
      <div className='pg-expense-input-object-info'>
        <img
          src={iconSrc}
          alt='wallet'
          className='pg-expense-input-object-icon'
        />

        <div className='pg-expense-input-object-data-input'>
          <input type={type} value={note} onChange={(e) => handleChange(e)} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTypingInputObject;
