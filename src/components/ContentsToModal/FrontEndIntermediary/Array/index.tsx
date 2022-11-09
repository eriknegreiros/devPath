import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const Array = () => {
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
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Documentação</li>
            </a>
            <a
              href="https://medium.com/aprendajs/10-javascript-array-m%C3%A9todos-que-voc%C3%AA-deveria-saber-789ea95667d0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Mêtodos de Array que você deveria conhecer</li>
            </a>
            <a
              href="https://acervolima.com/diferenca-entre-metodos-e-funcoes-em-javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Diferença entre métodos e funções</li>
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
              href="https://www.youtube.com/watch?v=mnjQeXqA3Z0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>
                10 métodos de array que você precisa conhecer - Hora de Codar
              </li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=yS7AcF-xRUg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                O que todo iniciante em Front-End deveria saber - Mario Souto
              </li>
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
              href="https://www.codewars.com/collections/javascript-array-methods"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Lista de Exercíos - Codewars</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Array;
