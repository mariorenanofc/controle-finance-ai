import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  // Acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-4 p-4 md:space-y-6 md:p-6 lg:overflow-hidden">
        {/* Título e botão */}
        <div className="flex w-full items-center justify-between gap-4">
          <h1 className="flex-1 text-lg font-bold md:text-2xl">Transações</h1>

          <AddTransactionButton />
        </div>

        {/* Tabela de Dados */}

        <ScrollArea className="h-[calc(100vh-4rem)]">
          <DataTable
            columns={transactionColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
