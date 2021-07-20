import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'
import DeleteImg from '../../assets/delete.svg'
import EditImg from '../../assets/edit.svg'
import { api } from "../../services/api";

interface EditProps{
    onOpenNewTransactionModal: () => void;
}

export function TransactionsTable(onOpenNewTransactionModal : EditProps) {
    const { transactions, deleteTransaction } = useTransactions();

    async function handleCreateNewTransaction(id: number) {
        deleteTransaction(id);
    }
    function handleUpdateNewTransaction(){

    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nº Orçamento</th>
                        <th>client</th>
                        <th>seller</th>
                        <th>description</th>
                        <th>Data de criação</th>
                        <th>Valor do orçamento</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.client}</td>
                            <td>
                                {transaction.seller}
                            </td>
                            <td>{transaction.description}</td>
                            <td>{
                                new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.created_at)
                                )}
                            </td>
                            <td>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.budget_amount)}
                            </td>
                            <td>

                                <div className="optionsIncons">
                                    <img src={DeleteImg} alt="Deletar orçamento" onClick={() => handleCreateNewTransaction(transaction.id)}></img>
                                    <img src={EditImg} alt="Editar orçamento" onClick={onOpenNewTransactionModal}></img>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}