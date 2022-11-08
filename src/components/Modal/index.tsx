import { Header, Main, Modal } from "./styles";

const GlobalModal = ({ onClose, title, children }: any) => {
  return (
    <Modal>
      <Header>
        <h2>{title}</h2>
        <section className="butonsSection">
          <button className="done">Concluido</button>
          <div className="close" onClick={onClose}>
            X
          </div>
        </section>
      </Header>

      <Main>{children}</Main>
    </Modal>
  );
};

export default GlobalModal;
