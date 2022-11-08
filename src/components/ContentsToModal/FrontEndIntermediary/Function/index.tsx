import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

const Function = () => {
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
              href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Documentação</li>
            </a>
            <a
              href="https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Callbacks e Promisses - Medium</li>
            </a>
            <a
              href="https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar#:~:text=Uma%20fun%C3%A7%C3%A3o%20declarada%20como%20async,estamos%20acostumados%20em%20programas%20s%C3%ADncronos."
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Async/Await - Alura</li>
            </a>
            <a
              href="https://www.treinaweb.com.br/blog/usando-o-async-await-do-javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>Async e Await - Treina Web</li>
            </a>
            <a
              href="https://hcode.com.br/blog/javascript-assincrono-o-guia-completo-parte-5-entendendo-async-await"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>JavaScript Assíncrono - Hcode</li>
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
           <a href="https://www.youtube.com/watch?v=WUmAAxH9n-A" target="_blank"
              rel="noopener noreferrer"> <li>Curso de JavaScript Assíncrono - Felipe Rocha</li></a>
           <a href="https://www.youtube.com/watch?v=we5Ac8U21lI" target="_blank"
              rel="noopener noreferrer"><li>Tudo sobre async e await - Hora de Codar</li></a>
           <a href="https://www.youtube.com/watch?v=7Bs4-rqbCQc" target="_blank"
              rel="noopener noreferrer">   <li>Entenda de vez callbacks e Promisses - Dev Pleno</li></a>
           <a href="https://www.youtube.com/watch?v=q28lfkBd9F4" target="_blank"
              rel="noopener noreferrer">   <li>Como usar Async e Await - Mario Souto</li></a>
          </ul>
        </div>
      </section>
      <section className="challengesFromModal">
        <div className="contentType">
          <div className="divIcon">
            <img src={challenges} alt="challenges icon" width={35} />
          </div>
          <h2>Desafios:</h2>
        </div>

        <div className="contentFont">
          <ul>
           <a href="https://www.codewars.com/collections/async-and-promises" target="_blank"
              rel="noopener noreferrer"><li>Lista de Exercíos - Codewars</li></a> 
          </ul>
        </div>
      </section>
    </>
  );
};

export default Function;
