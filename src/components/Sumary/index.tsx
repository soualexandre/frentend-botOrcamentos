import { Container } from './styles'
import iconImg from '../../assets/income.svg'

export function Sumary() {


    return (
        <Container>
            <div>
                    <h3>
                        Seja bem vindo a central de orçamentos
                    </h3>
                <header>
                    <p>Total de orçamentos</p>
                    <img src={iconImg} alt=" icon" />
                </header>
                <strong>
                    84364
                </strong>
            </div>
        </Container >
    );
}