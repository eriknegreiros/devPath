import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";

const Libs = () => {
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
          <a href="https://styled-components.com/docs" target="_blank"rel="noopener noreferrer">  <li>Styled Components</li></a>
          <a href="https://react-hook-form.com/" target="_blank"rel="noopener noreferrer">  <li>React Hook Form</li></a>
          <a href="https://blog.betrybe.com/desenvolvimento-web/yup/" target="_blank"rel="noopener noreferrer"> <li>Yup</li></a>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901" target="_blank"rel="noopener noreferrer"><li>React Router Dom</li></a>
          <a href="https://axios-http.com/ptbr/docs/intro" target="_blank"rel="noopener noreferrer"> <li>Axios</li></a>
          <a href="https://onebitcode.com/12-bibliotecas-do-react-que-voce-deveria-conhecer/" target="_blank"rel="noopener noreferrer"> <li>12 bibliotecas do React que você deveria conhecer</li></a>
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
           <a href="https://www.youtube.com/watch?v=QdfjWRc4ySA" target="_blank"rel="noopener noreferrer"> <li>Styled Components, por onde começar - Mario Souto</li></a>
           <a href="https://www.youtube.com/watch?v=Pj3jyYLpsZU" target="_blank"rel="noopener noreferrer"> <li>
              Validação de formularios com hook form e yup - Nicolas Teófilo
            </li></a>
            <a href="https://www.youtube.com/watch?v=rvS-TdtM8Ak" target="_blank"rel="noopener noreferrer">  <li>Aprenda React Router Dom - Otávio Miranda</li></a>
            <a href="https://www.youtube.com/watch?v=VM4e37DaskU&t=2027s" target="_blank"rel="noopener noreferrer">  <li>Consumindo API no front-end com axios</li></a>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Libs;
