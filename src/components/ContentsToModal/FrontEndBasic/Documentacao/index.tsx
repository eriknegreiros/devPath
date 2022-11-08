import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Documentacao = () => {
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
            <li>Como a documentação pode ajudar no aprendizado!</li>
            <li>A importância da documentação</li>
            <li>
              Técnica que uso pra aprender qualquer linguagem de programação
            </li>
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
              Medo de Documentação! Como aprender por ela? - Programador a Bordo
            </li>
            <li>Macetes para aprender nova linguagem - Código Fonte TV</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Documentacao;
