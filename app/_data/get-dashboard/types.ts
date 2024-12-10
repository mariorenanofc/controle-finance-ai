import { TransactionType } from "@prisma/client";

export type TransactionPercentagePertype = {
  [key in TransactionType]: number;
};
