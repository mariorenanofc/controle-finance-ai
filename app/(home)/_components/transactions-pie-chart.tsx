"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePertype } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENTE]: {
    label: "Investimennto",
    color: "#FFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Depósito",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  typesPercentage: TransactionPercentagePertype;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const TransactionsPieChart = ({
  investmentsTotal,
  depositsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionsPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.INVESTMENTE,
      amount: investmentsTotal,
      fill: "#FFFF",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
  ];

  return (
    <Card className="lg:min-w-auto mb-3 flex flex-col p-1 pb-6 md:min-w-[250px]">
      <CardHeader className="items-center pb-0 text-sm font-bold text-white">
        <CardTitle>Metricas</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] max-w-full md:max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius="50%"
              outerRadius="80%"
              paddingAngle={5}
              fill="#8884d8"
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={20} className="text-primary" />}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={20} className="text-red-500" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={20} />}
            title="Investimento"
            value={typesPercentage[TransactionType.INVESTMENTE]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsPieChart;
