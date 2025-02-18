import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";

export default function Success() {
    return (
        <SuccessContainer>
            <h1>Conta criada com sucesso!</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Neymar</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. 
            </p>

            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}