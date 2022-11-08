import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const Function = () => {
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
            <li>Callbacks e Promisses - Medium</li>
            <li>Async/Await - Alura</li>
            <li>Async e Await - Treina Web</li>
            <li>JavaScript Assíncrono - Hcode</li>
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
            <li>Curso de JavaScript Assíncrono - Felipe Rocha</li>
            <li>Tudo sobre async e await - Hora de Codar</li>
            <li>Entenda de vez callbacks e Promisses - Dev Pleno</li>
            <li>Como usar Async e Await - Mario Souto</li>
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
            <li>Lista de Exercíos - Codewars</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Function;
