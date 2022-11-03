import { v4 as uuidv4 } from 'uuid';
import { IncomingCategories } from '../types/types';

export const categories: IncomingCategories = {
  requiredExpense: [
    {
      id: uuidv4(),
      name: 'Food & Beverage',
      iconSrc: 'categories-fast-food.png',
    },
    {
      id: uuidv4(),
      name: 'Transportation',
      iconSrc: 'categories-transpotation.png',
    },
    {
      id: uuidv4(),
      name: 'Rentals',
      iconSrc: 'categories-rental.png',
    },
    {
      id: uuidv4(),
      name: 'Water Bill',
      iconSrc: 'categories-water-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Phone Bill',
      iconSrc: 'categories-phone-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Electricity Bill',
      iconSrc: 'categories-electricity-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Gas Bill',
      iconSrc: 'categories-gas-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Television Bill',
      iconSrc: 'categories-television-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Internet Bill',
      iconSrc: 'categories-internet-bill.png',
    },
    {
      id: uuidv4(),
      name: 'Other Utility Bills',
      iconSrc: 'categories-other-bills.png',
    },
  ],
  upAndComers: [
    {
      id: uuidv4(),
      name: 'Home Maintenance',
      iconSrc: 'categories-home-maintenance.png',
    },
    {
      id: uuidv4(),
      name: 'Vehicle Maintenance',
      iconSrc: 'categories-vehicle-maintenance.png',
    },
    {
      id: uuidv4(),
      name: 'Medical Check-up',
      iconSrc: 'categories-medical-check-up.png',
    },
    {
      id: uuidv4(),
      name: 'Insurances',
      iconSrc: 'categories-insurances.png',
    },
    {
      id: uuidv4(),
      name: 'Education',
      iconSrc: 'categories-education.png',
    },
    {
      id: uuidv4(),
      name: 'Houseware',
      iconSrc: 'categories-houseware.png',
    },
    {
      id: uuidv4(),
      name: 'Personal Items',
      iconSrc: 'categories-personal-items.png',
    },
    {
      id: uuidv4(),
      name: 'Pets',
      iconSrc: 'categories-pets.png',
    },
    {
      id: uuidv4(),
      name: 'Home Services',
      iconSrc: 'categories-home-services.png',
    },
    {
      id: uuidv4(),
      name: 'Other expense',
      iconSrc: 'categories-other-expense.png',
    },
  ],
  funAndRelax: [
    {
      id: uuidv4(),
      name: 'Fitness',
      iconSrc: 'categories-fitness.png',
    },
    {
      id: uuidv4(),
      name: 'Makeup',
      iconSrc: 'categories-makeup.png',
    },
    {
      id: uuidv4(),
      name: 'Gift & Donations',
      iconSrc: 'categories-donation.png',
    },
    {
      id: uuidv4(),
      name: 'Streaming Service',
      iconSrc: 'categories-streaming.png',
    },
    {
      id: uuidv4(),
      name: 'Fun Money',
      iconSrc: 'categories-fun-money.png',
    },
  ],
  investingAndDebtPayments: [
    {
      id: uuidv4(),
      name: 'Invesment',
      iconSrc: 'categories-invesment.png',
    },
    {
      id: uuidv4(),
      name: 'Debt Collection',
      iconSrc: 'categories-debt-collection.png',
    },
    {
      id: uuidv4(),
      name: 'Debt',
      iconSrc: 'categories-debt.png',
    },
    {
      id: uuidv4(),
      name: 'Loan',
      iconSrc: 'categories-loan.png',
    },
    {
      id: uuidv4(),
      name: 'Repayment',
      iconSrc: 'categories-repayment.png',
    },
    {
      id: uuidv4(),
      name: 'Pay Interest',
      iconSrc: 'categories-pay-interest.png',
    },
    {
      id: uuidv4(),
      name: 'Collect Interest',
      iconSrc: 'categories-collect-interest.png',
    },
  ],
  income: [
    {
      id: uuidv4(),
      name: 'Salary',
      iconSrc: 'categories-salary.png',
    },
    {
      id: uuidv4(),
      name: 'Other Income',
      iconSrc: 'categories-other-income.png',
    },
  ],
  other: [
    {
      id: uuidv4(),
      name: 'Outgoing transfer',
      iconSrc: 'categories-outgoing-transfer.png',
    },
    {
      id: uuidv4(),
      name: 'Incoming transfer',
      iconSrc: 'categories-incoming-transfer.png',
    },
  ],
};
