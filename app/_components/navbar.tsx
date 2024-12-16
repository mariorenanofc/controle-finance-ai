"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid p-4 md:px-8">
      {/* Logo e Links da Esquerda */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Image
          src="/logo.svg"
          width={150}
          height={39}
          alt="organiZe AI"
          className="h-8 w-auto md:h-10" // Ajusta dinamicamente
        />

        {/* Links grandes (escondidos em telas menores) */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            Assinatura
          </Link>
        </div>
      </div>

      {/* Botão do usuário e do menu */}
      <div className="flex items-center gap-4">
        {/* User Button para telas maiores */}
        <div className="hidden md:block">
          <UserButton showName />
        </div>

        {/* Apenas imagem do perfil para telas menores */}
        <div className="mt-2 block md:hidden">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-6 h-6", // Tamanho do avatar
                userButtonTrigger: "p-0", // Remove padding extra
              },
            }}
          />
        </div>

        {/* Botão de menu responsivo */}
        <button
          className="text-2xl text-muted-foreground focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Menu responsivo (visível apenas quando isMenuOpen for verdadeiro) */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 z-50 flex w-full flex-col items-center gap-4 border-b border-solid bg-black py-4 shadow-md md:hidden">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
            onClick={() => setIsMenuOpen(false)}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            } hover:text-primary`}
            onClick={() => setIsMenuOpen(false)}
          >
            Assinatura
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
