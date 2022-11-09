import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Ide = () => {
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
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Software para Baixar</li>
            </a>
            <a
              href="https://www.maismulheres.tech/courses/dicas-visual-studio-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Dicas Visual Studio Code</li>
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
              href="https://www.youtube.com/watch?v=qJ_M4W0u5rI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Dominando o VS Code - One Bit Code</li>
            </a>

            <a
              href="https://www.youtube.com/watch?v=Po4d8Q2krcE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>5 Truques do VS Code - Código Fonte</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=HIxRDyFfnuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>5 Extensões para o VS Code - Dev Media</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Ide;
