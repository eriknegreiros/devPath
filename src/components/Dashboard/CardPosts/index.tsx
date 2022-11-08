import { ContainerPost, DivPost } from "./style";

interface IPostProps {
  postsContent: string;
  postsUId: string;
}

const CardPosts = ({ postsContent }: IPostProps) => {
  return (
    <>
      <ContainerPost>
        <div>
          <img alt="" />
          <h6>Nome do dev</h6>
          <span>Ocupação do dev</span>
        </div>
        <DivPost>
          <p>{postsContent}</p>
        </DivPost>
      </ContainerPost>
    </>
  );
};

export default CardPosts;
