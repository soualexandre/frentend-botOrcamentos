import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'


export function TransactionsTable() {
    const {transactions} = useTransactions();
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>client</th>
                        <th>seller</th>
                        <th>description</th>
                        <th>budget_amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.client}</td>
                            <td>
                            {transaction.seller}
                           </td>
                            <td>{transaction.description}</td>
                            <td>
                            {transaction.budget_amount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}