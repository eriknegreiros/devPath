import styled from "styled-components";

export const ContainerMain = styled.div`

width: 100%;
min-width: 280px;

img{
    position: absolute;
    top: 260px;
    left: 48%;
    width: 8%;
    height: 500px;
    min-width: 20px;
    max-width: 70px;
    margin-bottom: 100px;
}

ul{
    height: 420px;
    margin-top: 50px;
    margin-bottom: 100px;
}

@media (max-width: 400px){
    img {
        left: 50%;
    }
}

@media (max-width: 350px){
    img {
        display:none;
    }
}
`