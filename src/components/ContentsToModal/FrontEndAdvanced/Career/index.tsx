import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Career = () => {
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
            <li>A importância do Linkedin para os programadores</li>
            <li>Dicas para o seu Linkedin</li>
            <li>Vagas de Tecnologia</li>
            <li>Banco de Vagas</li>
            <li>Trampos/co</li>
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
            <li>10 dicas para conseguir o primeiro emprego front-end</li>
            <li>dev front-end numa entrevista de emprego - serfrontend</li>
            <li>Como conseguir uma vaga Junior</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Career;
