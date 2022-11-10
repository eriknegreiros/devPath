import styled from "styled-components";

export const ContainerMain = styled.div`
width: 100%;
min-width: 280px;

.imgLogicaProgramacao{
    position: absolute;
    top: 180px;
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
            left: 43%
            top: 210px;
        }
    }
}
`