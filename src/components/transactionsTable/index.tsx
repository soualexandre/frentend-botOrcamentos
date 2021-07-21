import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'
import DeleteImg from '../../assets/delete.svg'
import viewImg from '../../assets/view.svg'
import EditImg from '../../assets/edit.svg'


interface TableProps{
    onOpenUpdateTransactionModal: () => void;
}

export function TransactionsTable({onOpenUpdateTransactionModal} :TableProps ) {
    const { transactions, deleteTransaction,GetUpdateTransaction } = useTransactions();

    async function handleCreateNewTransaction(id: number) {
        deleteTransaction(id);
    }
 
    async function handleUpdateTransaction(id: number) {
        GetUpdateTransaction(id);
        onOpenUpdateTransactionModal();
    }
 

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>nº Orç.</th>
                        <th>Client</th>
                        <th>Vendedor</th>
                        <th>Descrição</th>
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
                            <td >{transaction.description}</td>
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
                                    <img src={viewImg} alt="Deletar orçamento" onClick={() => handleCreateNewTransaction(transaction.id)}></img>
                                    <img src={EditImg} alt="Editar orçamento" onClick={() => handleUpdateTransaction(transaction.id)}></img>
                                    <img src={DeleteImg} alt="Deletar orçamento" onClick={() => handleCreateNewTransaction(transaction.id)}></img>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}