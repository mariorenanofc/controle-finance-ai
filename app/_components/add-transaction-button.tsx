"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Button
        className="ml-3 flex max-w-[160px] flex-1 items-center justify-center rounded-full px-2 py-1 text-xs font-bold md:max-w-[250px] md:px-4 md:py-2 md:text-base"
        onClick={() => setDialogIsOpen(true)}
      >
        <ArrowDownUpIcon className="mr-1 h-4 w-4 md:h-5 md:w-5" />
        <span>{isDesktop ? "Adicionar Transação" : "Adicionar"}</span>
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        transactionId={""}
      />
    </>
  );
};

export default AddTransactionButton;
