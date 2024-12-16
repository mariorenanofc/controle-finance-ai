import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "organiZe IA",
  description: "Organize sua vida financeira com mais facilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mulish.className} dark antialiased lg:h-screen`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          <div className="lg:flex lg:h-full lg:flex-col">
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="dark"
              hideProgressBar={false}
            />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
