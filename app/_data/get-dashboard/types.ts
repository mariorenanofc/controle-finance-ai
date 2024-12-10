import { TransactionCategory, TransactionType } from "@prisma/client";

export type TransactionPercentagePertype = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  total: number;
  percentageOfTotal: number;
}
