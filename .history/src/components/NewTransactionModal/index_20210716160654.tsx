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

    // const [type, setType] = useState('deposit');
    // const [title, setTitle] = useState('');
    // const [amount, setAmaount] = useState(0);
    // const [category, setCategory] = useState('');

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
                <h2>Criar Orçamento</h2>
                <input
                    placeholder="Cliente"

                />

                <input
                    type="number"
                    placeholder="Vendedor"
                />
              
                <input
                    type="number"
                    placeholder="Valor da orçamento"
                />


                <textarea placeholder="Descrição do orçamento">
                </textarea>


                <button type="submit" >
                    Cadastrar
                </button>


            </Container>

        </Modal>
    );
}