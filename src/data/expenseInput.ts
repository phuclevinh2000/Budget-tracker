import { IncomingWalletOption } from '../types/types';
import moment from 'moment';

export const wallet: IncomingWalletOption[] = [
  {
    id: 37,
    label: 'Wallet',
    value: 'cash',
    iconSrc: './assets/icons/notifications/notifications-wallets.png',
  },
  {
    id: 38,
    label: 'Wallet',
    value: 'card',
    iconSrc: './assets/icons/notifications/notifications-cards.png',
  },
];

export const initialSelectObject = {
  label: '',
  value: '',
  iconSrc: './assets/icons/notifications/notifications-empty.png',
};

export const initialSelectWallet = {
  id: 37,
  label: 'Wallet',
  value: 'cash',
  iconSrc: './assets/icons/notifications/notifications-wallets.png',
};

export const initialSelectCategory = {
  id: 1,
  label: 'Category',
  value: 'Food & Beverage',
  operation: 'minus',
  iconSrc: './assets/icons/categories/categories-fast-food.png',
};

export const initialAmountInput = {
  id: 39,
  label: 'Amount',
  value: 0,
  iconSrc: './assets/icons/notifications/notifications-cash.png',
};

export const initialDateInput = {
  id: 40,
  label: 'Date',
  value: moment().format('DD/MM/YYYY'),
  iconSrc: './assets/icons/notifications/notifications-date.png',
};

export const initialNoteInput = {
  id: 41,
  label: 'Note',
  value: '',
  iconSrc: './assets/icons/notifications/notifications-note.png',
};
