import {
  IncomingWalletOption,
  IncomingExpenseOptionData,
  IncomingDataCategory,
} from '../types/types';
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

export const initialSelectWallet: IncomingExpenseOptionData = {
  id: 37,
  label: 'Wallet',
  value: 'cash',
  iconSrc: './assets/icons/notifications/notifications-wallets.png',
};

export const initialSelectCategory: IncomingDataCategory = {
  id: 1,
  label: 'Category',
  value: 'Food & Beverage',
  iconSrc: './assets/icons/categories/categories-fast-food.png',
  operation: 'minus',
  type: 'Required Expense',
};

export const initialAmountInput: IncomingExpenseOptionData = {
  id: 39,
  label: 'Amount',
  value: 0,
  iconSrc: './assets/icons/notifications/notifications-cash.png',
};

export const initialDateInput: IncomingExpenseOptionData = {
  id: 40,
  label: 'Date',
  value: moment().format('YYYY-MM-DD'),
  iconSrc: './assets/icons/notifications/notifications-date.png',
};

export const initialNoteInput: IncomingExpenseOptionData = {
  id: 41,
  label: 'Note',
  value: '',
  iconSrc: './assets/icons/notifications/notifications-note.png',
};
