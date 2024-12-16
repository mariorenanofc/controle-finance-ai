import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between pb-6">
      {/*Icone */}
      <div className="items-certer flex gap-3">
        <div className="rounded-lg bg-white bg-opacity-[3%] p-1">{icon}</div>
        <p className="text-base text-muted-foreground sm:text-xs">{title}</p>
      </div>
      {/*Porcentagem */}
      <p className="text-base font-bold sm:text-xs">{value}%</p>
    </div>
  );
};

export default PercentageItem;
