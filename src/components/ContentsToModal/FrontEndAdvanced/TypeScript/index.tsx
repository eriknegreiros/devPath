import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const TypeScript = () => {
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
            <li>O que é e por que usar Typescript</li>
            <li>TypeScript: O guia definitivo</li>
            <li>TypeScript: Como usar</li>
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
            <li>Curso de TypeScript - William Justen</li>
            <li>TypeScript: O inicio de forma prática - Rocketseat</li>
            <li>Curso de React com TypeScript - Lucas Souza Dev</li>
            <li>Curso TypeScript do básico ao avançado - PogCast</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TypeScript;
