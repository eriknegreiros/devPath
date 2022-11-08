import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  min-width: 280px;

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

<<<<<<< HEAD
  img {
=======

img{
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
    position: absolute;
    top: 220px;
    left: 47%;
    height: 90vh;
  }

<<<<<<< HEAD
  ul {
    height: 97vh;
    margin-top: 40px;

    @media (max-width: 350px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 400px) {
    img {
      left: 50%;
=======
ul{
    height: 90vh;
    margin-top: 40px;

}

@media (max-width: 718px){
    img {
        left: 44%;
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
    }
  }

<<<<<<< HEAD
  @media (max-width: 350px) {
=======
@media (max-width: 350px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
    img {
      display: none;
    }
<<<<<<< HEAD
  }
`;
=======

    ul{
        height: 80vh;
        margin-top: 0px;
    
    }
}
`
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
