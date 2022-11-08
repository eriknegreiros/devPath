import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const IntroJavaScript = () => {
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
            <li>Documentação DOM</li>
            <li>Modelo de Objeto de Documento (DOM)</li>
            <li>Primeiros passos com HTML, CSS E JS</li>
            <li>O que é e como aprender a linguagem</li>
            <li>Aprenda JavaScript do básico</li>
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
            <li>
              Manipulação de DOM com JavaScript, do zero, na prática -
              Rocketseat
            </li>
            <li>JavaScript do Básico ao avançado - Atekkita</li>
            <li>Curso de JavaSciprit - Curso em Vídeo</li>
            <li>Curso de JavaScript - Node Treinamentos</li>
            <li>Curso de JavaScript - Programação Web</li>
          </ul>
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
          <ul>
            <li>Lista de Exercíos 1 - Codewars</li>
            <li>Lista de Exercíos 2 - Codewars</li>
            <li>Lista de Exercíos 3 - Codewars</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default IntroJavaScript;
