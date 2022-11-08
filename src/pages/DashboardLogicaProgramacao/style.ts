import styled from "styled-components";

export const UlLogicaProgramacao = styled.ul`
margin: 100px 0;
height: 90vh;

.cardAjuste {
  margin: 120px 0 150px 65%;
}

@media (max-width: 540px){

  margin: 0px 0;
  .cardAjuste {
    margin: 125px 0 140px 75%;
}

@media (max-width: 465px){
  
  .cardAjuste {
    margin: 90px 0 160px 75%;
  }
}

@media (max-width: 350px){ 
  {
    height: 80vh;
    margin-top: 0px;}

}
`