import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'


export function TransactionsTable() {
    const { transactions } = useTransactions();
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>client</th>
                        <th>seller</th>
                        <th>description</th>
                        <th>Budget amount</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Cliente</td>
                        <td >
                            seller
                        </td>
                        <td>description</td>
                        <td>
                            Budget amount
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}