import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SumarryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}

const SumarryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SumarryCardProps) => {
  return (
    <Card className={`${size === "large" ? "bg-green-600 bg-opacity-5" : ""}`}>
      <CardHeader className="flex items-center gap-2 sm:flex-row">
        {icon}
        <p
          className={`font-bold ${size === "small" ? "text-xs text-muted-foreground sm:text-sm" : "opacy-70 text-white"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-around">
        <p
          className={`p-1 font-extrabold ${size === "small" ? "text-xs sm:text-lg" : "text-3xl"}`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SumarryCard;
