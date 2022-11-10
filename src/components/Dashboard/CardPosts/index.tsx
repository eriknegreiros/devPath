import { ContainerPost, EditPost, SectionPost } from "./style";
import { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ModalEdit from "../ModalEditPost";

import { ForumContext, iPost } from "../../../Context/ForumContext";
import { UserContext } from "../../../Context/UserContext";

export interface iPropsModal {
  handleModalUpdate: () => void;
  postsContent: string;
  postidCard: number;
}
interface IPostProps {
  postsContent: string;
  postsUId: number;
  postsName: string;
  postsImage: string;
  postsOccupation: string;
  postidCard: number;
  id: string | number;
}

const CardPosts = ({
  postsContent,
  postsName,
  postsImage,
  postsOccupation,
  postidCard,
  postsUId,
  
}: IPostProps) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const { handleDelete } = useContext(ForumContext);
  const [post, setPost] = useState([] as iPost[]);
  const { profile } = useContext(UserContext);



  const handleModalUpdate = () => {
    if (editModal === false) {
      setEditModal(true);
    }
    if (editModal === true) {
      setEditModal(false);
    }
  };
 


  return (
    <>
      {editModal && (
        <ModalEdit
          handleModalUpdate={handleModalUpdate}
          postidCard={postidCard}
          postsContent={postsContent}
        />
      )}

      <ContainerPost key={postsUId}>
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

        {postsUId === profile?.id ? (
          <EditPost>
            <AiOutlineEdit className="edit" color="#d29e00" onClick={() => handleModalUpdate()} />
            <AiOutlineDelete className="delete" color="#ff000096" onClick={() => handleDelete(postidCard)} />
          </EditPost>
        ) : null}
      </ContainerPost>
    </>
  );
};

export default CardPosts;
