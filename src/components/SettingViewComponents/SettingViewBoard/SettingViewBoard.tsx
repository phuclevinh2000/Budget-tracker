import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { toggleDarkMode } from '../../../redux/features/settingSlice';
import { useState } from 'react';

import './SettingViewBoard.scss';

import DarkLightModeSwitchButton from '../DarkLightModeSwitchButton/DarkLightModeSwitchButton';

const SettingViewBoard = () => {
  const [isdarkMode, setIsDarkMode] = useState<boolean>(
    useSelector((state: RootState) => state.settingData.darkMode)
  );
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state: RootState) => state.settingData.darkMode
  );

  const handleToggleButtonCLick = () => {
    setIsDarkMode(!isdarkMode);
    dispatch(toggleDarkMode(!isdarkMode));
  };

  console.log(darkMode);

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
      </div>
    </div>
  );
};

export default SettingViewBoard;
