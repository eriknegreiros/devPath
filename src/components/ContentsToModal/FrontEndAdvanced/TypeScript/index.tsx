import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

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
            <a
              href="https://www.typescriptlang.org/pt/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Documentação</li>
            </a>
            <a
              href="https://kenzie.com.br/blog/typescript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>O que é e por que usar Typescript</li>
            </a>
            <a
              href="https://www.devmedia.com.br/introducao-ao-typescript/36729"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>TypeScript: O guia definitivo</li>
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
              href="https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de TypeScript - William Justen</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=0mYq5LrQN1s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>TypeScript: O inicio de forma prática - Rocketseat</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=1bEbBkWc4-I&list=PL29TaWXah3iZktD5o1IHbc7JDqG_80iOm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de React com TypeScript - Lucas Souza Dev</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Z0RlhHuw6hk&list=PL4iwH9RF8xHlxBrCZImFELtiew3TneihE"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso TypeScript do básico ao avançado - PogCast</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TypeScript;
