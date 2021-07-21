import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'
import { toast } from 'react-toastify';

import { useTransactions } from '../../hooks/useTransactions';

interface UpdateTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function UpdateTransactionModal({ isOpen, onRequestClose }: UpdateTransactionModalProps) {
    const {transactions ,createTransaction} = useTransactions();


    const [client, setClient] = useState('');
    const [seller, setSeller] = useState('');
    const [description, setDescription] = useState('');
    const [budget_amount, setValueBudget] = useState(0);


     async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({
          client,
          seller,
          description,
          budget_amount,
      })
      setClient('');
      setSeller('');
      setDescription('');
      setValueBudget(0);
      onRequestClose();
      toast.success("Orçamento criado com sucess")
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="fechar modal" />
            </button>

            <Container >
                <h2>Atualizar orçamento</h2>
                <input
                    placeholder="Cliente"
                    onChange={ (e) => setClient(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Vendedor"
                    onChange={ (e) => setSeller(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor da orçamento"
                    onChange={ (e) => setValueBudget(Number(e.target.value))}

                />
                <textarea 
                placeholder="Descrição do orçamento"
                onChange={ (e) => setDescription(e.target.value)}
                />
            

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}