import { ContainerPost, EditPost, SectionPost } from "./style";

import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ModalEdit from "../ModalEditPost";

export interface iPropsModal {
  handleModalUpdate: () => void;
}
interface IPostProps {
  postsContent: string;
  postsUId: string;
}

const CardPosts = ({ postsContent }: IPostProps) => {
  const [editModal, setEditModal] = useState<boolean>(false);

  const handleModalUpdate = () => {
    if (editModal === false) {
      setEditModal(true);
    }
    if (editModal === true) {
      setEditModal(false);
    }
  };
  const { profile } = useContext(UserContext);
  console.log(profile);

  return (
    <>
      {editModal && <ModalEdit handleModalUpdate={handleModalUpdate} />}

      <ContainerPost>
        <main>
          <img src={profile?.image} alt="foto do usuário" />
          <div>
            <h6>{profile?.name}</h6>
            <span>{profile?.occupation}</span>
            <SectionPost>
              <p>{postsContent}</p>
            </SectionPost>
          </div>
        </main>

        <EditPost>
          <AiOutlineEdit onClick={() => handleModalUpdate()} />
          <AiOutlineDelete />
        </EditPost>
      </ContainerPost>
    </>
  );
};

export default CardPosts;
