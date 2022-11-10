import challenges from "../../../../Assets/challenges-icon.svg";

const Challenges = () => {
  return (
    <>
      <section className="challengesFromModal">
        <div className="contentType">
          <div className="divIcon">
            <img src={challenges} alt="challenges icon" width={35} />
          </div>
          <h2>Desafios:</h2>
        </div>

        <div className="contentFont">
          <ul>
            <a href="https://www.topcoder.com/" target="_blank"
              rel="noopener noreferrer"><li>Top Coder</li>
            </a> 
            <a href="https://www.youtube.com/watch?v=9C3b3c4hYlY" target="_blank"
              rel="noopener noreferrer"><li>Front Beginners</li>
            </a> 
            <a href="https://www.geniol.com.br/logica/desafios/" target="_blank"
              rel="noopener noreferrer"><li>Geniol</li>
            </a> 
            <a href="https://rachacuca.com.br/logica/problemas/" target="_blank"
              rel="noopener noreferrer"><li>Racha Cuca</li>
            </a> 
          </ul>
        </div>
      </section>
    </>
  );
};

export default Challenges;
