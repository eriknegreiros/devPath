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
  postsName: string;
  postsImage: string;
  postsOccupation: string;
}

const CardPosts = ({
  postsContent,
  postsName,
  postsImage,
  postsOccupation,
}: IPostProps) => {
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

  return (
    <>
      {editModal && <ModalEdit handleModalUpdate={handleModalUpdate} />}

      <ContainerPost>
        <main>
          <img src={postsImage} alt="foto do usuário" />
          <div>
            <h6>{postsName}</h6>
            <span>{postsOccupation}</span>
            <SectionPost>
              <p>{postsContent}</p>
            </SectionPost>
          </div>
        </main>

        <EditPost>
          <span className="editPost">
            <AiOutlineEdit onClick={() => handleModalUpdate()} />
          </span>
          <span className="deletePost"><AiOutlineDelete /></span>
        </EditPost>
      </ContainerPost>
    </>
  );
};

export default CardPosts;
