import styled from "styled-components";

export const ContainerMain = styled.div`

width: 100%;
min-width: 280px;


@media(max-width:350px){
        display: flex;
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        align-items: center;
    }

img{
    position: absolute;
    top: 150px;
    left: 48%;
    height: 90vh;
}

ul{
    height: 97vh;
    margin-top: 40px;


    @media(max-width:350px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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