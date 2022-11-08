import { Header, Main, Modal } from "./styles";
import sites from "../../Assets/sites-icon.svg";
import videos from "../../Assets/videos-icon.svg";
import challenges from "../../Assets/challenges-icon.svg";

const GlobalModal = ({ onClose, title, children }: any) => {
  return (
    <Modal>
      <Header>
        <h2>{title}</h2>
        <section className="butonsSection">
          <button className="done">Concluido</button>
          <button className="close" onClick={onClose}>
            X
          </button>
        </section>
      </Header>

      <Main>
        <section className="sitesFromModal">
          <div className="contentType">
            <div className="divIcon">
              <img src={sites} alt="sites icon" width={35} />
            </div>
            <h2>Sites:</h2>
          </div>
          <div className="contentFont">
            <p>{children}</p>
          </div>
        </section>

        <section className="videosFromModal">
          <div className="contentType">
            <div className="divIcon">
              <img src={videos} alt="videos icon" width={35} />
            </div>
            <h2>Vídeos:</h2>
          </div>

          <div className="contentFont">
            <p>Conteúdo aqui</p>
          </div>
        </section>

        <section className="challengesFromModal">
          <div className="contentType">
            <div className="divIcon">
              <img src={challenges} alt="challenges icon" width={35} />
            </div>
            <h2>Desafios:</h2>
          </div>

          <div className="contentFont">
            <p>Conteúdo aqui </p>
          </div>
        </section>
      </Main>
    </Modal>
  );
};

export default GlobalModal;
