import styled from "styled-components";

export const FooterEnd = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background-color: var(--main-color);
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  h4 {
    padding: 5px;
    font-size: 0.8rem;
    text-align: center;
  }
`;
