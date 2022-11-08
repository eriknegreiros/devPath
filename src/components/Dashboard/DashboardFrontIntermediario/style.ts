import styled from "styled-components";

export const UlStyle = styled.li`
  margin-top: 70px;
  height:90vh;
  
  .cardAjuste {
    margin: 90px 0 110px 63%;
  }
  
  @media (max-width: 540px){
    .cardAjuste {
      margin: 90px 0 110px 72%;
  }
  @media (max-width: 350px){ 
    
      height: 80vh;
      margin-top: 0px;
  
  }
}
`