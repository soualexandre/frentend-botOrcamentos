import { Container } from './styles'
import iconImg from '../../assets/income.svg'

export function Sumary() {


    return (
        <Container>
            <div>
                    <h2>
                        Seja bem vindo de volta
                    </h2>
                <header>
                    <p>Central de orçamentos</p>
                    <img src={iconImg} alt=" icon" />
                </header>
                <strong>
                    84364
                </strong>
            </div>
        </Container >
    );
}