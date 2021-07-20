import LogoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal} :HeaderProps ) {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dtMoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Novo orçamento
                </button>
            </Content>
        </Container>
    );
}