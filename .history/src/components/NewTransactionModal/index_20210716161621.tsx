import Modal from 'react-modal'
import { FormEvent, useState } from 'react'
import { Container, TransactionsTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import iconImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    // const {createTransaction} = useTransactions();

    const [client, setClient] = useState('deposit');
    const [seller, setSeller] = useState('');
    const [description, setDescription] = useState(0);
    const [valueBudget, setValueBudget] = useState('');

    //  async function handleCreateNewTransaction(event: FormEvent) {
    //     event.preventDefault();

    //     await createTransaction({
    //       title,
    //       amount,
    //       category,
    //       type,
    //   })
    //   setTitle('');
    //   setType('deposit');
    //   setAmaount(0);
    //   setCategory('');
    //   onRequestClose();
    // }
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
                <h2>Criar orçamento</h2>
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
                    onChange={ (e) => setValueBudget(e.target.value)}

                />
                <textarea 
                placeholder="Descrição do orçamento"
                onChange={ (e) => setDescription(Number(e.target.value))}
                />
            

                <button type="submit" onClick={handleCreateNewTransaction} >
                    Cadastrar
                </button>


            </Container>

        </Modal>
    );
}