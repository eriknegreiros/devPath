import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const React = () => {
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
           <a href="https://beta.reactjs.org/" target="_blank"rel="noopener noreferrer"> <li>Documentação</li></a>
           <a href="https://kenzie.com.br/blog/react/" target="_blank"rel="noopener noreferrer"> <li>Por que usar e como aprender React</li></a>
           <a href="https://blog.betrybe.com/react/" target="_blank"rel="noopener noreferrer"><li>Introdução ao React</li></a>
           <a href="https://www.devmedia.com.br/react/" target="_blank"rel="noopener noreferrer"> <li>Aprenda React do Básico</li></a>
           <a href="https://pt-br.reactjs.org/community/courses.html" target="_blank"rel="noopener noreferrer"><li>Cursos gratuitos de React - Site Oficial</li></a>
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
          <a href="https://www.youtube.com/watch?v=pDbcC-xSat4"target="_blank"rel="noopener noreferrer">  <li>React em 2022 - Rocketseat</li></a>
          <a href="https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO"target="_blank"rel="noopener noreferrer"> <li>Curso de React - Hora de Codar</li></a>
          <a href="https://www.youtube.com/watch?v=C8M94QLJy0o&list=PLXik_5Br-zO9YVs9bxi7zoQlKq59VPTX1"target="_blank"rel="noopener noreferrer"> <li>React JS - João Ribeiro</li></a>
          <a href="https://www.youtube.com/watch?v=ErjWNvP6mko"target="_blank"rel="noopener noreferrer"> <li>Curso de React - Dicas para Devs</li></a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default React;
