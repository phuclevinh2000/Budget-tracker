export interface IncomingWalletOption {
  id: string | number;
  label: string;
  iconSrc: string;
  value: string;
}

export interface IncomingSingleCategory {
  id: string | number;
  value: string;
  label: string;
  iconSrc: string;
  operation: string;
  type: string;
}

export interface IncomingLinks {
  id: string;
  text: string;
  path: string;
  iconSrc: string;
}

export interface IncomingExpenseOptionData {
  id: any;
  label: string;
  value: string | number;
  iconSrc: string;
}

export interface IncomingDataCategory extends IncomingExpenseOptionData {
  operation: string;
  type: string;
}

export interface IncomingWalletInitialState {
  cash: number;
  card: number;
}

export interface IncomingCurrency {
  unit: string;
  value: number;
  iconSrc: string;
}

export interface IncomingExpenseSliceInitialState {
  expense: any;
  isResetInput: boolean;
  wallet: IncomingWalletInitialState;
  darkMode: boolean;
  currency: any;
}

export interface IncomingExpense {
  id: string;
  amount: IncomingExpenseOptionData;
  category: IncomingDataCategory;
  date: IncomingExpenseOptionData;
  note: IncomingExpenseOptionData;
  wallet: IncomingExpenseOptionData;
}

// export interface IncomingExpenseInputObject {
//   data: IncomingExpenseOptionData;
//   title: string;
//   dataCallback
// }
