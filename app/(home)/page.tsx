import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SumaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

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

  return (
    <div className="space-y-4 p-2">
      <Navbar />
      <div className="flex items-center justify-between p-2">
        <h1 className="items-center text-lg font-bold md:text-2xl">
          Dashboard
        </h1>
        <TimeSelect />
      </div>
      <SumaryCards month={month} />
    </div>
  );
};

export default Home;
