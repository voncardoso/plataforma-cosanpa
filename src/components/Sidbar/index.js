import { Container } from "./style";
import Logo from "../../assets/Logo-sidbar.svg"
export function Sidbar(){
    return(
        <Container>
            <img src={Logo} alt="Logo-sidbar.svg" />
        </Container>
    )
}