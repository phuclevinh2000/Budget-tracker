import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  toggleDarkMode,
  changeCurrency,
} from '../../../redux/features/expenseSlice';
import { useState } from 'react';
import { currencyUnit } from '../../../data/setting';

import './SettingViewBoard.scss';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DarkLightModeSwitchButton from '../DarkLightModeSwitchButton/DarkLightModeSwitchButton';

const SettingViewBoard = () => {
  const [isdarkMode, setIsDarkMode] = useState<boolean>(
    useSelector((state: RootState) => state.expenseData.darkMode)
  );
  const [currencyData, setCurrencyData] = useState<string>(
    useSelector((state: RootState) => state.expenseData.currency.unit)
  );

  const dispatch = useDispatch();

  const handleToggleButtonCLick = () => {
    setIsDarkMode(!isdarkMode);
    dispatch(toggleDarkMode(!isdarkMode));
  };

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    const data = {
      newCurrency: event.target.value,
      oldCurrency: currencyData,
    };
    setCurrencyData(event.target.value as string);
    dispatch(changeCurrency(data));
  };

  return (
    <div className='pg-setting-view-board'>
      <div className='pg-setting-view-board-title'>Setting</div>
      <div className='pg-setting-view-board-content'>
        <div className='pg-setting-view-option'>
          <h2>Screen mode</h2>
          <div>
            <DarkLightModeSwitchButton
              handleToggleButtonCLick={handleToggleButtonCLick}
              isdarkMode={isdarkMode}
            />
          </div>
        </div>
        <div className='pg-setting-view-option'>
          <h2>Currency</h2>
          <div>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={currencyData}
              onChange={handleChangeCurrency}
              style={{ width: '100px' }}
            >
              {currencyUnit.map((option: any) => (
                <MenuItem key={option.value} value={option.unit}>
                  {option.unit}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingViewBoard;
