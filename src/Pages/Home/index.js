import { Sidbar } from "../../components/Sidbar";
import { Container } from "./style";

export function Home(){
    return(
        <Container>  
            <Sidbar/>
            <h1>Home page</h1>
        </Container>
    )
}