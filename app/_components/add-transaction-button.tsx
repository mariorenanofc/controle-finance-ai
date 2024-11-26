"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="flex max-w-[150px] flex-1 items-center justify-center rounded-full px-2 py-1 text-xs font-bold md:max-w-none md:px-4 md:py-2 md:text-base"
        onClick={() => setDialogIsOpen(true)}
      >
        <ArrowDownUpIcon className="mr-1 h-4 w-4 md:h-5 md:w-5" />
        <span>Adicionar</span>
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
