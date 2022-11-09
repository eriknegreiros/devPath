import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Html5 = () => {
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
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Documentação</li>{" "}
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Elementos HTML5</li>
            </a>
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Iniciando com HTML</li>
            </a>
            <a
              href="https://www.devmedia.com.br/o-que-e-o-html5/25820"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>O que é o HTML 5 e como utilizá-lo</li>
            </a>
            <a
              href="https://www.digitalhouse.com/br/blog/html5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>HTML5 - Qual a vantagem de utilizá-lo</li>
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
              href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso em Vídeo - HTML5 - Gustavo Guanabara</li>{" "}
            </a>
            <a
              href="https://www.youtube.com/watch?v=YoDJsSII2Ug&list=PLwXQLZ3FdTVGKl3iPEyEWpFoYkMUxWW5O"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso Completo HTML 5 - Node Treinamentos</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=SV7TL0hxmIQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso HTML 5 - Hora de Codar</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Html5;
