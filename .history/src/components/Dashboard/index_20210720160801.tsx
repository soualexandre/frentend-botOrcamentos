import { useState } from "react";
import { Sumary } from "../Sumary";
import { TransactionsTable } from "../transactionsTable";
import { Container } from "./styles";

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

function hadleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true)
}
function hadleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false)
}

export function Dashboard(){
    return(
       <Container>
          <Sumary/>
          <TransactionsTable  onOpenNewTransactionModal={hadleOpenNewTransactionModal}/>
       </Container>
    );
}