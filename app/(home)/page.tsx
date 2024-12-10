import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SumaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";

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

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=01");
  }
  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-2">
        <div className="flex items-center justify-between p-2">
          <h1 className="items-center text-lg font-bold md:text-2xl">
            Dashboard
          </h1>
          <TimeSelect />
        </div>
        <div className="md:grid md:grid-cols-[2fr,1fr]">
          <div>
            <SumaryCards month={month} {...dashboard} />
            <div className="grid-cols-3 md:grid md:grid-rows-1 md:gap-6">
              <TransactionsPieChart {...dashboard} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
