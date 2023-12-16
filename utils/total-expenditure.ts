import { ExpenditureType } from '../types/types';

export default function totalExpenditure(items: ExpenditureType[]): number {
  let total = 0;
  items.forEach((item) => {
    total += item.quantity * item.unitPrice;
  });
  return total;
}
