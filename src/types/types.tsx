export interface IncomingSingleCategory {
  id: any;
  value: string;
  label: string;
  iconSrc: string;
}

// export interface IncomingCategories {
//   // requiredExpense: IncomingSingleCategory[];
//   // upAndComers: IncomingSingleCategory[];
//   // funAndRelax: IncomingSingleCategory[];
//   // investingAndDebtPayments: IncomingSingleCategory[];
//   // income: IncomingSingleCategory[];
//   // other: IncomingSingleCategory[];
//   IncomingSingleCategory[]
// }

export interface IncomingSmallSidebar {
  isShowSmallSideBar: boolean;
}

export interface IncomingNavbar {
  isShowSmallSideBar: boolean;
  setIsShowSmallSidebar: any;
}

export interface IncomingWalletOption {
  id: any;
  label: string;
  iconSrc: string;
  value: string;
}
