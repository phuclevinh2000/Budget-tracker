import { IncomingLinks } from './../types/types';
import { v4 as uuidv4 } from 'uuid';

export const links: IncomingLinks[] = [
  { id: uuidv4(), text: 'home', path: '/', iconSrc: 'button-home.png' },
  {
    id: uuidv4(),
    text: 'transactions',
    path: 'transactions',
    iconSrc: 'button-transactions.png',
  },
  { id: uuidv4(), text: 'add', path: 'add', iconSrc: 'button-add-new.png' },
  {
    id: uuidv4(),
    text: 'setting',
    path: 'setting',
    iconSrc: 'button-setting.png',
  },
  {
    id: uuidv4(),
    text: 'future',
    path: 'future',
    iconSrc: 'button-planning.png',
  },
];

export const listThingsNeedToBeDoneInTheFuture: string[] = [
  'Budgets',
  'Edit',
  'Login',
  'Currency Converting',
  'Grouping base on type',
  'Save Data to cloud',
  'Search',
  'Localization',
  'More meaning full data display',
  'Dark mode',
];
