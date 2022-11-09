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
            <a
              href="https://programadoresbrasil.com.br/2022/04/ler-documentacao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Como a documentação pode ajudar no aprendizado!</li>
            </a>

            <a
              href="https://www.treinaweb.com.br/blog/a-importancia-da-documentacao-para-desenvolvedores-de-software"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>A importância da documentação</li>
            </a>

            <a
              href="https://blog.especializati.com.br/tecnica-que-utilizo-para-aprender-uma-nova-linguagem-de-programacao-em-menos-de-30-dias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                Técnica que uso pra aprender qualquer linguagem de programação
              </li>
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
              href="https://www.youtube.com/watch?v=rI4BX_bW9qA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                Medo de Documentação! Como aprender por ela? - Programador a
                Bordo
              </li>
            </a>
            <a
              href="https://www.youtube.com/watch?v=hOVxpMCkozI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Macetes para aprender nova linguagem - Código Fonte TV</li>
            </a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Documentacao;
