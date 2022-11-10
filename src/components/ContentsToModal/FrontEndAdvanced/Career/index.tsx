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
            <a
              href="https://www.brasilcode.com.br/a-importancia-do-linkedin-para-os-programadores/#:~:text=o%20seu%20perfil.-,Contatos%20com%20Empresas%20e%20Profissionais%20da%20%C3%81rea,mesmo%20para%20fins%20mais%20profissionais."
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>A importância do Linkedin para os programadores</li>
            </a>
            <a
              href="https://www.iugu.com/iugu4devs/blog/como-deixar-linkedin-atrativo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Dicas para o seu Linkedin</li>
            </a>
            <a
              href="https://tecnologia.vagas.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Vagas de Tecnologia</li>
            </a>
            <a
              href="https://www.apinfo.com/apinfo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Banco de Vagas</li>
            </a>
            <a
              href="https://trampos.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Trampos/CO</li>
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
              href="https://www.youtube.com/watch?v=NBHoUIPe9pY"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>10 dicas para conseguir o primeiro emprego front-end</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=DXRqdxmh0NU"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>dev front-end numa entrevista de emprego - serfrontend</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=hkXiyjT4IXg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Como conseguir uma vaga Junior</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Career;
