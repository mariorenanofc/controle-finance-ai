import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full md:grid-cols-2">
      {/* Esquerda */}
      <div className="mx-auto flex h-full max-w-md flex-col justify-center p-6 md:p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mx-auto mb-6 md:mx-0"
        />
        <h1 className="mb-3 text-center text-3xl font-bold md:text-left md:text-4xl">
          Bem-vindo
        </h1>
        <p className="text-muted-foreground mb-8 text-center md:text-left">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button className="mx-auto md:mx-0" variant="outline">
            <LogInIcon className="mr-2" />
            Login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* Direita */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.png"
          alt="Faça login"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
