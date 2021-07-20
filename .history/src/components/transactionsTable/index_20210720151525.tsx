import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'
import DeleteImg from '../../assets/delete.svg'
import EditImg from '../../assets/edit.svg'
import { api } from "../../services/api";


export function TransactionsTable() {
    const { transactions } = useTransactions();

    async function handleCreateNewTransaction(id: Number) {
        await api.delete(`/budget/delete/${id}`)
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
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
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}