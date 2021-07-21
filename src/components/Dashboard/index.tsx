import { Sumary } from "../Sumary";
import { TransactionsTable } from "../transactionsTable";
import { Container } from "./styles";
import {UpdateTransactionModal} from '../UpdateTransactionModal'
import { useState } from "react";


export function Dashboard() {
   const [isUpdateTransactionModalOpen, setIsUpdateTransactionModalOpen] = useState(false);

   function hadleOpenUpdateTransactionModal() {
     setIsUpdateTransactionModalOpen(true)
   }
   function hadleCloseUpdateTransactionModal() {
      setIsUpdateTransactionModalOpen(false)
    }
   return (
      <Container>
         <Sumary />
         <TransactionsTable onOpenUpdateTransactionModal={hadleOpenUpdateTransactionModal} />
         <UpdateTransactionModal
            isOpen={isUpdateTransactionModalOpen}
            onRequestClose={hadleCloseUpdateTransactionModal} />
      </Container>
   );
}