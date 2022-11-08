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
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Documentação</li>
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Documentação DOM</li>
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Modelo de Objeto de Documento (DOM)</li>
            </a>
            <a
              href="https://www.devmedia.com.br/primeiros-passos-no-html5-javascript-e-css3/25647"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Primeiros passos com HTML, CSS E JS</li>
            </a>
            <a
              href="https://blog.betrybe.com/javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>O que é e como aprender a linguagem</li>
            </a>
            <a
              href="https://www.devmedia.com.br/javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Aprenda JavaScript do básico</li>
            </a>
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
            <a
              href="https://www.youtube.com/watch?v=UftSB4DaRU4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>
                {" "}
                Manipulação de DOM com JavaScript, do zero, na prática -
                Rocketseat{" "}
              </li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=6YwbZbHRQ8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>JavaScript do Básico ao avançado - Atekkita</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de JavaSciprit - Curso em Vídeo</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=uFMUdv1W1p4&list=PLwXQLZ3FdTVF9Y0RbsuN54XYP7D0dZIlR"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de JavaScript - Node Treinamentos</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=vEwPnjqWQ-g&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de JavaScript - Programação Web</li>
            </a>
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
            <a
              href="https://www.codewars.com/collections/js-exercises"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Lista de Exercíos 1 - Codewars</li>
            </a>
            <a
              href="https://www.codewars.com/collections/training-js-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Lista de Exercíos 2 - Codewars</li>
            </a>
            <a
              href="https://www.codewars.com/collections/js-code-challenges"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Lista de Exercíos 3 - Codewars</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default IntroJavaScript;
