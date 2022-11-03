export interface IncomingSingleCategory {
  id: string;
  name: string;
  iconSrc: string;
}

export interface IncomingCategories {
  requiredExpense: IncomingSingleCategory[];
  upAndComers: IncomingSingleCategory[];
  funAndRelax: IncomingSingleCategory[];
  investingAndDebtPayments: IncomingSingleCategory[];
  income: IncomingSingleCategory[];
  other: IncomingSingleCategory[];
}
