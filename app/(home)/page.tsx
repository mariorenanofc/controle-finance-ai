import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SumaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`/?month=${currentMonth}`);
  }
  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="space-y-1 p-2 lg:flex lg:h-full lg:flex-col lg:overflow-hidden">
        <div className="flex items-center justify-between p-2">
          <h1 className="items-center text-lg font-bold md:text-2xl">
            Dashboard
          </h1>
          <TimeSelect />
        </div>
        <div className="gap-8 md:grid md:grid-cols-[2fr,1fr] md:overflow-hidden lg:overflow-auto">
          <div className="gap-4 lg:flex lg:flex-col lg:overflow-auto">
            <SumaryCards month={month} {...dashboard} />
            <div className="grid-cols-3 p-2 md:grid md:grid-rows-1 md:gap-5">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />
            </div>
          </div>
          <div className="m-2 lg:overflow-auto">
            <LastTransactions lastTransactions={dashboard.lastTransactions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
