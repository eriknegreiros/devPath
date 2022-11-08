import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const Html5 = () => {
  return (
    <>
      <section className="sitesFromModal">
        <div className="contentType">
          <div className="divIcon">
            <img src={sites} alt="sites icon" width={35} />
          </div>
          <h2>Sites:</h2>
        </div>
        <div className="contentFont">
          <ul>
            <li>Documentação</li>
            <li>Elementos HTML5</li>
            <li>Iniciando com HTML</li>
            <li>O que é o HTML 5 e como utilizá-lo</li>
            <li>HTML5 - Qual a vantagem de utilizá-lo</li>
          </ul>
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
          <ul>
            <li>Curso em Vídeo - HTML5 - Gustavo Guanabara</li>
            <li>Curso Completo HTML 5 - Node Treinamentos</li>
            <li>Curso HTML 5 - Hora de Codar</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Html5;
