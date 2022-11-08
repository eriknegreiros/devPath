import styled from "styled-components";

export const ContainerMain = styled.div`
width: 100%;
min-width: 280px;
img{
    position: absolute;
    top: 220px;
    left: 47%;
    height: 90vh;
}
ul{
    height: 90vh;
    margin-top: 40px;
}
@media (max-width: 718px){
    img {
        left: 44%;
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
    
    }
}
`