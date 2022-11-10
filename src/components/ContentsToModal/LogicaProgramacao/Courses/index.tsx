import videos from "../../../../Assets/videos-icon.svg";

const Courses = () => {
  return (
    <>
      <section className="videosFromModal">
        <div className="contentType">
          <div className="divIcon">
            <img src={videos} alt="videos icon" width={35} />
          </div>
          <h2>Vídeos:</h2>
        </div>

        <div className="contentFont">
          <ul>
            <a href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank" rel="noopener noreferrer">
              <li>CursoEmVideo</li>
            </a>
            <a href="https://www.softblue.com.br/site/curso/id/6/CURSO+LOGICA+DE+PROGRAMACAO+BASICO+ON+LINE+LO06" target="_blank" rel="noopener noreferrer">
              <li>SoftBlue</li>
            </a>
            <a href="https://www.primecursos.com.br/logica-de-programacao-basica/" target="_blank" rel="noopener noreferrer">
              <li>Prime Cursos</li>
            </a>
            <a href="https://www.youtube.com/watch?v=iF2MdbrTiBM" target="_blank" rel="noopener noreferrer">
              <li>DevAprender</li>
            </a>
            <a href="https://www.youtube.com/watch?v=lymtuqJdf8U&list=PLAIgeRdMaoGVrASBxWcbAurQMzXJMArkg" target="_blank" rel="noopener noreferrer">
              <li>Labenu</li>
            </a>
            <a href="https://www.youtube.com/watch?v=uErxkLD9D-k" target="_blank" rel="noopener noreferrer">
              <li>serfrontend</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Courses;
