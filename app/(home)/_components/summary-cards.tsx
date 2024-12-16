import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumarryCard from "./summary-card";

interface SumaryCardsProps {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const SumaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SumaryCardsProps) => {
  return (
    <div className="space-y-2 p-2">
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
