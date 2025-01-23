import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardContent } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="p-6 md:space-y-6">
        <h1 className="text2xl font-bold">Assinaturas</h1>

        <div className="gap-6 md:flex">
          <Card className="mb-4 md:w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$ </span>
                <span className="text-6xl">0 </span>
                <span className="text-2xl text-muted-foreground">/mês </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon className="text-red-500" />
                <p>Relátórios de IA</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon className="text-red-500" />
                <p>Baixar relatório mensal</p>
              </div>
              <div className="flex items-center gap-2">
                <XIcon className="text-red-500" />
                <p>Suporte especial</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 md:w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Advanced
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$ </span>
                <span className="text-6xl">19,99</span>
                <span className="text-2xl text-muted-foreground">/mês </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Relátórios de IA</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Baixar relatório mensal</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="text-primary" />
                <p>Suporte especial</p>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
