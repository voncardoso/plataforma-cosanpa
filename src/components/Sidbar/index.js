import { Container } from "./style";
import Logo from "../../assets/Logo-sidbar.svg"
import Avatar from "../../assets/Ellipse.png"

export function Sidbar(){
    return(
        <Container>
            <img src={Logo} alt="Logo" />
        </Container>
    )
}