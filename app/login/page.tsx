import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* Esquerda*/}
      <div className="flex flex-col h-full justify-center p-8 max-w-[500px] mx-auto">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" className="mb-7"/>
        <h1 className="text-4xl font-bold mb-3">Bem vindo</h1>
        <p className="text-muted-foreground mb-8">A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
        <Button className="" variant="outline">
            <LogInIcon className="mr-2"/>
             Login ou criar  conta
        </Button>
      </div>
      {/* Direita*/}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Faça login" fill />
      </div>
    </div>
  );
};

export default LoginPage;
