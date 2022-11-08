import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const CSS3 = () => {
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
            <li>O que é o CSS3 e os seus recursos?</li>
            <li>CSS3 tutoriais - W3 Schools</li>
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
            <li>Série CSS para inciantes - Trilha Front</li>
            <li>Aprenda CSS e crie um projeto - Hora de Codar</li>
            <li>Curso CSS completo - Programação WEB</li>
            <li>Curso de HTML e CSS - Chief of Design</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CSS3;
