import { Container } from './styles'
import iconImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

export function Sumary() {
    const { transactions } = useTransactions();



    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt=" icon" />
                </header>
                <strong>
                 84364
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="out icon" />
                </header>
                <strong >
                  5435845
                </strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total icon" />
                </header>
                <strong>
                   4854
                </strong>
            </div>
        </Container >
    );
}