import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const React = () => {
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
            <li>Por que usar e como aprender React</li>
            <li>Introdução ao React</li>
            <li>Aprenda React do Básico</li>
            <li>Cursos gratuitos de React - Site Oficial</li>
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
            <li>React em 2022 - Rocketseat</li>
            <li>Curso de React - Hora de Codar</li>
            <li>React JS - João Ribeiro</li>
            <li>Curso de React - Dicas para Devs</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default React;
