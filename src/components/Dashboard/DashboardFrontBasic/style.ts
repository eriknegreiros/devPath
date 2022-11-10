import styled from "styled-components";

export const ContainerMain = styled.div`
width: 100%;
min-width: 280px;

.frontEndBasic {
    
    margin: -40px 0 55px 58%;
  }

  @media (max-width: 540px) {
    .frontEndBasic {
      margin: 50px 0 70px 50%;
    }
  }

  
.frontEndBasic2 {
    
    margin: -45px 0 55px 15%;
  }

  @media (max-width: 540px) {
    .frontEndBasic2 {
      margin: 0px 0 70px 15%;
    }
  }

.imgLogicaProgramacao{
    position: absolute;
    top: 270px;
    left: 46%;
    height: 80vh;
}
img{
    position: absolute;
    top: 150px;
    left: 47%;
    height: 90vh;
}
ul{
    height: 90vh;
    margin-top: 80px;
}

@media (max-width: 718px){
    img {
        left: 44%;
    }
    .imgLogicaProgramacao{
        left: 43%
    }
}

@media (max-width: 465px){
    .imgLogicaProgramacao{
        top: 230px;
    }
}

@media (max-width: 350px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        display:none;
    }
    ul{
        height: 80vh;
        margin-top: 0px;
    
        .imgLogicaProgramacao{
            left: 43%;
            top: 210px;
        }
    }
}
`