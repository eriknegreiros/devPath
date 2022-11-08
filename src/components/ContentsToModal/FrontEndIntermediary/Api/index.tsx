import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const Api = () => {
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
            <li>Documentação JSON</li>
            <li>Boas Práticas com API</li>
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
            <li>Aprenda Fetch/API - Hora de Codar</li>
            <li>Curso de API REST - While True</li>
            <li>
              Tudo o que você precisa saber de JS antes do React - Rocketseat
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Api;
