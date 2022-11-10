import { useState, useEffect } from 'react';
import { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setIsResetInput } from '../../../redux/features/expenseSlice';

import './AddExpenseViewTypingInput.scss';

import { blockInvalidChar } from '../../../utils/utils';

const AddExpenseViewTypingInput = ({
  title,
  type,
  iconSrc,
  dataCallback,
  initialData,
}: any) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<number | string>(initialData.value);
  const isResetInput = useSelector(
    (state: RootState) => state.expenseData.isResetInput
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInput(e.target.value);

    const InputData = {
      label: title,
      iconSrc: iconSrc,
      value: e.target.value,
    };

    dataCallback(InputData);
  };

  const handleChangeNumber = (event: any) => {
    const value = event.target.value;
    // eslint-disable-next-line no-useless-escape
    const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;

    setInput(value.match(regex)[0]);
    const InputData = {
      label: title,
      iconSrc: iconSrc,
      value: Number(value.match(regex)[0]),
    };

    dataCallback(InputData);
  };

  useEffect(() => {
    if (isResetInput) {
      type === 'number' ? setInput(0) : setInput('');

      dispatch(setIsResetInput(false));
    }
  }, [dispatch, input, isResetInput, type]);

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
          {type === 'number' ? (
            <input
              min={0}
              type='number'
              value={input}
              onChange={(e) => handleChangeNumber(e)}
              onKeyDown={blockInvalidChar}
            />
          ) : (
            <input
              type={type}
              value={input}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddExpenseViewTypingInput;
