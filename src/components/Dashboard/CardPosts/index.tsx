import { ContainerPost, DivPost } from "./style";

const CardPosts = () => {
  return (
    <>
      <ContainerPost>
        <div>
          <img alt="" />
          <h6>Nome do dev</h6>
          <span>Ocupação do dev</span>
        </div>
        <DivPost>
          <p>Post do dev</p>
        </DivPost>
      </ContainerPost>
    </>
  );
};

export default CardPosts;
