import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";

const TransactionsPage = async () => {
  //acessar as transações do meu banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* Titulo e botão*/}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-sm font-bold md:text-2xl">Transações</h1>

        <Button className="rounded-full">
          Adicionar Componentes
          <ArrowDownUpIcon className="" />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
