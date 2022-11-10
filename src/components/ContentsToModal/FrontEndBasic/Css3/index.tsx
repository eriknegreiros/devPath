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
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Documentação</li>{" "}
            </a>
            <a
              href="https://kenzie.com.br/blog/css3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>O que é o CSS3 e os seus recursos?</li>
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>CSS3 tutoriais - W3 Schools</li>
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
              href="https://www.youtube.com/watch?v=nXRTjbwfF2A"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Série CSS para inciantes - Trilha Front</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=vwbegraDXD8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Aprenda CSS e crie um projeto - Hora de Codar</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=HtVRRHoASes&list=PL2Fdisxwzt_f5C7Mv0kg1EAHhy2VJLf1c"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso CSS completo - Programação WEB</li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=EiZbhsVY2Dk&list=PLwgL9IEA0PxUjbhob9UMdpVq12sGrjgU6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Curso de HTML e CSS - Chief of Design</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CSS3;
