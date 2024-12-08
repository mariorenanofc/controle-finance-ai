import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumarryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SumaryCardsProps {
  month: string;
}

const SumaryCards = async ({ month }: SumaryCardsProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENTE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6 p-2">
      {/* Primeiro Card */}
      <div className="relative">
        <SumarryCard
          icon={<WalletIcon size={18} />}
          title="Saldo"
          amount={balance}
          size="large"
        />
      </div>

      {/* Outros Cards */}
      <div className="grid flex-1 grid-cols-3 gap-3 sm:gap-2">
        <SumarryCard
          icon={<PiggyBankIcon size={19} />}
          title="Investimento"
          amount={investmentsTotal}
        />
        <SumarryCard
          icon={<TrendingUpIcon size={19} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SumarryCard
          icon={<TrendingDownIcon size={19} className="text-red-500" />}
          title="Despesa"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SumaryCards;
