import { v4 as uuidv4 } from 'uuid';
import { IncomingWalletOption } from '../types/types';

export const wallet: IncomingWalletOption[] = [
  {
    id: uuidv4(),
    label: 'Cash',
    iconSrc: './assets/icons/notifications/notifications-wallets.png',
  },
  {
    id: uuidv4(),
    label: 'Card',
    iconSrc: './assets/icons/notifications/notifications-cards.png',
  },
];

export const initialSelectObject = {
  id: uuidv4(),
  label: '',
  iconSrc: './assets/icons/notifications/notifications-empty.png',
};
