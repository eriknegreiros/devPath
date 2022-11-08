import styled from "styled-components";

export const CardTechStyled = styled.li`
  &:nth-child(odd) {
    display: flex;
    flex-direction: column;
    justify-content: center;

<<<<<<< HEAD
    width: 30%;
    height: 115px;
    min-width: 105px;
    max-width: 350px;

    margin: 0px 0 0 58%;

    cursor: pointer;

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      position: relative;
      top: 30px;

      margin: 5px 0;
      text-align: left;
=======
&:nth-child(odd){
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 30%;
        height: 115px;
        min-width: 105px;
        max-width: 350px;

        margin: 4% 0 3% 60%;

        cursor: pointer;

          h3 {
              font-style: normal;
              font-weight: 500;
              font-size: 1.5rem;
              position: relative;
              top: 30px;

              margin: 5px 0;
              text-align: left;
            }

            p {
                
                font-style: normal;
                font-weight: 400;
                font-size: 0.8rem;
                position: relative;
              top: 30px;
                text-align: left;
            }
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      position: relative;
      top: 30px;
      text-align: left;
    }
<<<<<<< HEAD
  }
=======
    
    &:hover{
        transform: scale(1.1);
        background-color: var(--main-color4);
    }
    
    @media (max-width: 540px) {
        
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259

  &:nth-child(even) {
    display: flex;
    flex-direction: column;
    justify-content: center;

<<<<<<< HEAD
    width: 30%;
    height: 85px;
    min-width: 105px;
    max-width: 350px;
=======
        &:nth-child(odd){
            margin: 30px 0 40px 65%;
        }
>>>>>>> 6b920ad4911e602145d421dda591200b1ec73259

    margin: 0px 0 0 9%;
    cursor: pointer;

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 1.5rem;
      position: relative;
      top: 30px;
      margin: 5px 0;
      text-align: right;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.8rem;
      text-align: right;
      position: relative;
      top: 30px;
    }
  }

  &:hover {
    transform: scale(1.1);
    background-color: var(--main-color4);
  }

  @media (max-width: 540px) {
    &:nth-child(even) {
      margin: 0px 0 0 5%;
    }
  }
  @media (max-width: 540px) {
    &:nth-child(odd) {
      margin: 10px 0 10px 60%;
    }

    &:nth-child(even) {
      margin: 0px 0 0 2%;
    }

    p {
      display: none;
    }
  }

  @media (min-width: 1300px) {
    &:nth-child(even) {
      margin: 0px 0 0 15%;
    }
  }
`;
