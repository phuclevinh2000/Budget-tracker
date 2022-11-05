import { v4 as uuidv4 } from 'uuid';

export const links = [
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
    text: 'budgets',
    path: 'budgets',
    iconSrc: 'button-planning.png',
  },
];
