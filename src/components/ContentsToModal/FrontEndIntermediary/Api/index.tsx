import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Api = () => {
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
         <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank"
              rel="noopener noreferrer">  <li>Documentação</li></a> 
         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank"
              rel="noopener noreferrer">  <li>Documentação JSON</li></a> 
         <a href="https://br.sensedia.com/post/good-practices-apis-and-their-methods" target="_blank"
              rel="noopener noreferrer">   <li>Boas Práticas com API</li></a> 
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
          <a href="https://www.youtube.com/watch?v=qIGYM4S8x50" target="_blank"
              rel="noopener noreferrer"> <li>Aprenda Fetch/API - Hora de Codar</li></a> 
          <a href="https://www.youtube.com/watch?v=5mMuX8AWxxs" target="_blank"
              rel="noopener noreferrer">  <li>Curso de API REST - While True</li></a> 
          <a href="https://www.youtube.com/watch?v=37SwqREHRGI" target="_blank"
              rel="noopener noreferrer">   <li>
              Tudo o que você precisa saber de JS antes do React - Rocketseat
            </li></a> 
          </ul>
        </div>
      </section>
    </>
  );
};

export default Api;
