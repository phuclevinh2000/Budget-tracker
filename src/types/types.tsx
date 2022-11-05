export interface IncomingSingleCategory {
  id: string;
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
  id: string;
  label: string;
  iconSrc: string;
}
