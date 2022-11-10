import sites from "../../../../Assets/sites-icon.svg";

const Blogs = () => {
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
            <a href="https://devschannel.com/logica-de-programacao/introducao" target="_blank"
              rel="noopener noreferrer">  <li>Introdução - Devschannel</li></a> 
            <a href="https://idocode.com.br/blog/programacao/logica-de-programacao-conheca-as-melhores-formas-de-aprender/" target="_blank"
              rel="noopener noreferrer">  <li>Lógica de programação: conheça as melhores formas de aprender - I Do Code</li></a> 
            <a href="https://kenzie.com.br/blog/logica-de-programacao/" target="_blank"
              rel="noopener noreferrer">   <li>Lógica de programação: o que é e por que é importante - Kenzie Academy</li></a> 
            <a href="https://culturadev.com.br/7-ferramentas-incriveis-de-treinar-sua-logica-de-programacao/" target="_blank"
              rel="noopener noreferrer">   <li>7 ferramentas incríveis de treinar sua lógica de programação - Cultura Dev</li></a> 
            <a href="https://www.digitalhouse.com/br/blog/logica-de-programacao/" target="_blank"
              rel="noopener noreferrer">   <li>5 dicas de lógica de programação para iniciantes - DigitalHouse</li></a> 
            <a href="https://www.treinaweb.com.br/blog/o-que-e-de-fato-a-logica-de-programacao" target="_blank"
              rel="noopener noreferrer">   <li>O que é de fato a lógica de programação? - Teina Web</li></a> 
            <a href="https://blog.casadodesenvolvedor.com.br/logica-de-programacao/" target="_blank"
              rel="noopener noreferrer">   <li>O que é e como funciona algoritmo e lógica de programação - Casa do Desenvolvedor</li></a> 
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blogs;
