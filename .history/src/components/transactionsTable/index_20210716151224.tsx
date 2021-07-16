import { useTransactions } from "../../hooks/useTransactions";
import { Container } from './styles'


export function TransactionsTable() {
    const {transactions} = useTransactions();
    console.log(transactions);
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
                        <tr>
                            <td>dfsadfasdf</td>
                            <td>
                           dsfgsdfg</td>
                            <td>dfgsdfgsdfg</td>
                            <td>
                            dfgsdfgdf
                            </td>
                        </tr>
                </tbody>
            </table>
        </Container>
    );
}