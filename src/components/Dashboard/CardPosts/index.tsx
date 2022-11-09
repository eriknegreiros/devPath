import { ContainerPost, DivPost } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

interface IPostProps {
  postsContent: string;
  postsUId: string;
}

const CardPosts = ({ postsContent }: IPostProps) => {
  const { profile } = useContext(UserContext);

  return (
    <>
      <ContainerPost>
        <div>
          <img src={profile?.image} alt="foto do usuário" />
          <h6>{profile?.name}</h6>
          <span>{profile?.occupation}</span>
        </div>
        <DivPost>
          <p>{postsContent}</p>
        </DivPost>
      </ContainerPost>
    </>
  );
};

export default CardPosts;
