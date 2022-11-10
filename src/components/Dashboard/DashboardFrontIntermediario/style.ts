import styled from "styled-components";

export const UlStyle = styled.li`
  margin-top: 80px;
  height:85vh;
  
  
  .cardIntermediary {
    width:33%;
    margin: 125px 0 110px 63%;
  }
  
  @media (max-width: 540px){
    .cardIntermediary {
      margin: 120px 0 120px 72%;
  }
  @media (max-width: 350px){ 
      height: 80vh;
      margin-top: 0px;
  
  }
}
`