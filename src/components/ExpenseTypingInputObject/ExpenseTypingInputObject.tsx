import { useState, useEffect } from 'react';
import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setIsResetInput } from '../../redux/features/addExpenseSlice';

import './ExpenseTypingInputObject.scss';

const ExpenseTypingInputObject = ({
  title,
  type,
  iconSrc,
  dataCallback,
}: any) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<number | string>('');
  const isResetInput = useSelector(
    (state: RootState) => state.addExpenseData.isResetInput
  );

  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);

    const InputData = {
      label: title,
      iconSrc: iconSrc,
      value: e.target.value,
    };

    dataCallback(InputData);
  };

  useEffect(() => {
    if (isResetInput) {
      type === 'number' ? setInput(0) : setInput('');

      dispatch(setIsResetInput(false));
    }
  }, [dispatch, input, isResetInput]);

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
          <input type={type} value={input} onChange={(e) => handleChange(e)} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTypingInputObject;
