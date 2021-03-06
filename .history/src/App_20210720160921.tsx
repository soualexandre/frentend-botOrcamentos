import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'
import { useState } from 'react';
import {NewTransactionModal} from './components/NewTransactionModal'
import { TransacticionsProvider } from './hooks/useTransactions';
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hadleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function hadleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransacticionsProvider>
      <ToastContainer />
      <Header onOpenNewTransactionModal={hadleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={hadleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransacticionsProvider>
  );
}

