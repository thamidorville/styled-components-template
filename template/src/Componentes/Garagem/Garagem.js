import { Carro } from "../Carro/Carro";
import { Botao, GaragemContainer, Estacionamento, CarroContainer} from "./style";
export function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>
      <Estacionamento>
      
      <CarroContainer>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
     
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </CarroContainer>
    </Estacionamento>
    </GaragemContainer>
  );
}
