import { useState } from 'react';

import './ConnectTool.scss';
import { Twirl as Hamburger } from 'hamburger-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const ConnectTool = () => {
  const [isOpenContact, setIsOpenContact] = useState(false);
  const handleOpenContact = () => {
    setIsOpenContact(!isOpenContact);
  };
  return (
    <>
      <div className='pg-connect-tool'>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/phuclevinh2000'
          className={`pg-connect-tool-github ${isOpenContact && 'active'}`}
        >
          <GitHubIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/phuc-le-vinh/'
          className={`pg-connect-tool-linkedln ${isOpenContact && 'active'}`}
        >
          <LinkedInIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.facebook.com/levinhphuc.le.9'
          className={`pg-connect-tool-facebook ${isOpenContact && 'active'}`}
        >
          <FacebookIcon style={{ fontSize: 25 }} />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/phuclevinh2000/Budget-tracker'
          className={`pg-connect-tool-code ${isOpenContact && 'active'}`}
        >
          <CodeIcon style={{ fontSize: 25 }} />
        </a>
      </div>
      <div className='pg-connect'>
        <Hamburger
          color='rgba(0, 0, 0, 0.6)'
          size={20}
          toggled={isOpenContact}
          toggle={handleOpenContact}
        />
      </div>
    </>
  );
};

export default ConnectTool;
