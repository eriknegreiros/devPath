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
            <li>Documentação</li>
            <li>Mêtodos de Array que você deveria conhecer</li>
            <li>Diferença entre métodos e funções</li>
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
              10 métodos de array que você precisa conhecer - Hora de Codar
            </li>
            <li>
              O que todo iniciante em Front-End deveria saber - Mario Souto
            </li>
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

export default Array;
