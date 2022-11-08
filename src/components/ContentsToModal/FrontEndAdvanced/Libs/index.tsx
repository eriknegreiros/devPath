import sites from "../../../../Assets/sites-icon.svg";
import videos from "../../../../Assets/videos-icon.svg";
import challenges from "../../../../Assets/challenges-icon.svg";

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
            <li>Styled Components</li>
            <li>React Hook Form</li>
            <li>Yup</li>
            <li>React Router Dom</li>
            <li>Axios</li>
            <li>12 bibliotecas do React que você deveria conhecer</li>
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
            <li>Styled Components, por onde começar - Mario Souto</li>
            <li>
              Validação de formularios com hook form e yup - Nicolas Teófilo
            </li>
            <li>Aprenda React Router Dom - Otávio Miranda</li>
            <li>Consumindo API no front-end com axios</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Libs;
