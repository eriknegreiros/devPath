import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg"

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
            <li>Software para Baixar</li>
            <li>Dicas Visual Studio Code</li>
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
            <li>Dominando o VS Code - One Bit Code</li>
            <li>5 Truques do VS Code - Código Fonte</li>
            <li>5 Extensões para o VS Code - Dev Media</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Ide;
