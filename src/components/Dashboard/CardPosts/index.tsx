import { ContainerPost, EditPost, SectionPost } from "./style";
import erik from "../../../Assets/devs/erik.png";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import ModalEdit from "../ModalEditPost";

export interface iPropsModal {
  handleModalUpdate: () => void;
}

const CardPosts = () => {
  const [editModal, setEditModal] = useState<boolean>(false);

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
      {editModal && <ModalEdit handleModalUpdate={handleModalUpdate} />}

      <ContainerPost>
        <main>
          <img src={erik} alt="img" />
          <div>
            <h6>Nome do usuario</h6>
            <span>dev</span>
            <SectionPost>
              <p>
                dvdfvfvdhvhh rhv vhrhv hrv fv hvhk kh kvjkv fv
                vdvdjvnvndvdjvbjdvbd ccb gfebhcsd bc sac asbc sac
                csbchscbhscsahcbhaca shcashbcs dvhbdhbvdbhvhbdvbhdvjacbascbas
                cashcsabhcbhascb
              </p>
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
