import { Header, Main, Modal } from "./styles";
import React from "react";

const GlobalModal = ({ onClose, title, children }: React.ReactNode | any) => {
  return (
    <Modal>
      <Header>
        <h2>{title}</h2>
        <div className="close" onClick={onClose}>
            <span>X</span>
          </div>
      </Header>

      <Main>{children}</Main>
    </Modal>
  );
};

export default GlobalModal;
