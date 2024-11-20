import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";

const TransactionsPage = async () => {
  // Acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-4 p-4 md:space-y-6 md:p-6">
      {/* Título e botão */}
      <div className="flex w-full items-center justify-between gap-4">
        <h1 className="flex-1 text-lg font-bold md:text-2xl">Transações</h1>

        <Button className="flex max-w-[150px] flex-1 items-center justify-center rounded-full px-2 py-1 text-xs font-bold md:max-w-none md:px-4 md:py-2 md:text-base">
          <ArrowDownUpIcon className="mr-1 h-4 w-4 md:h-5 md:w-5" />
          <span>Adicionar</span>
        </Button>
      </div>

      {/* Tabela de Dados */}
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
