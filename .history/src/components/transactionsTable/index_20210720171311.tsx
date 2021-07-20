import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'
import DeleteImg from '../../assets/delete.svg'
import viewImg from '../../assets/view.svg'
import EditImg from '../../assets/edit.svg'

export function TransactionsTable() {
    const { transactions, deleteTransaction } = useTransactions();

    async function handleCreateNewTransaction(id: number) {
        deleteTransaction(id);
    }
 

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>nº Orç.</th>
                        <th>Client</th>
                        <th>Vendedor</th>
                        <th>descrição</th>
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
                                    <img src={EditImg} alt="Deletar orçamento" onClick={() => handleCreateNewTransaction(transaction.id)}></img>
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