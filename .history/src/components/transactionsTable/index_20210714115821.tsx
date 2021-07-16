import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {
    useEffect(()=>{
        api.get('orders')
        .then(response => console.log(response.data))
    })
    return(
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Ttulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de Sistemas</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Aluguél</td>
                    <td className="withdraw">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2021</td>
                </tr>
                
            </tbody>
        </table>
    </Container>
    );
}