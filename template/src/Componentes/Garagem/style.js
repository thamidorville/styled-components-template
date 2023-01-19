import styled from "styled-components";
import styledComponents from "styled-components";

export const Botao = styled.button`
    border: none;
    background-color: orange;
    padding: 8px;
`

export const GaragemContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

export const Estacionamento = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

list-style:none;
li{

    list-style:none
}
`

export const CarroContainer = styled.div`
display: grid;
// margin-left: 53rem;
// margin-right: 53rem;
margin: 4rem 10rem 18rem 30rem;
width: 52.93rem; 
grid-template-columns: 2fr 8fr;
gap: 4rem;
align-content: center;
text-align: center;
justify-content: center;
align-items:center;
background-color: yellow;
border: 2px  solid orange;
`
