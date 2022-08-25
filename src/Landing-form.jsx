import React from "react";
import { useState } from "react";
import Banner from "./assets/banner.png";
import { Radio } from "@mantine/core";
import Face from "./assets/face-icon.png";
import Insta from "./assets/insta-icon.png";
import Ldin from "./assets/linkedin-icon.png";
import Youtube from "./assets/you-icon.png";
import Twit from "./assets/icon-twitter.png";
import AdobeLg from "./assets/logo Adobe.png";
import Calendar from "./assets/calendar.png";
import axios from "axios";

const LandingForm = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company === "") {
      alert("te falta llenar el nombre de tu compañia");
    }
    if (name === "") {
      alert("No sabemos tu nombre!");
    }
    if (email === "") {
      alert("Hace falta un email");
    }
    if (terms === "") {
      alert("Tienes que escoger alguna de las dos casillas");
    }

    axios
      .post("https://hooks.zapier.com/hooks/catch/666990/blqeo0s/", {
        company: company,
        name: name,
        email: email,
        terms: terms,
      })
      .then((res) => console.log(res));
  };

  console.log(terms);
  return (
    <div id="App">
      <header>
        <img src={Banner} alt="banner-adobe" />
      </header>
      <main>
        <div className="box-form-landing">
          <div className="form-landing">
            <form onSubmit={handleSubmit}>
              <div className="form-and-extra-info">
                <div className="form-input">
                  <label htmlFor="empresa">Empresa:</label>
                  <input
                    type="text"
                    autoComplete="on"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="Nombre completo">Nombre Completo:</label>
                  <input
                    type="text"
                    autoComplete="on"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="Email">Correo Electrónico:</label>
                  <input
                    type="email"
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="extra-info">
                  <ul>
                    <li className="points">
                      Esta invitación es personal e intransferible.
                    </li>
                    <li className="points">
                      Esta invitación está limitada a 2 personas por empresa.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="terms-and-conditions">
                <div className="adobe-terms">
                  <ul>
                    <p>Lo que Adobe cubre:</p>
                    <li className="points">
                      2 noches de hotel durante el entrenamiento, solo a las
                      personas fuera de la ciudad y los invitados que vienen de
                      otros países.
                    </li>
                    <li className="points">
                      Desayuno a los invitados que se estén hospedando en el
                      hotel.
                    </li>
                    <li className="points">Alimentos:</li>
                  </ul>
                  <ul>
                    <li className="points">Coffe Breaks (Día 1 y Día 2).</li>
                    <li className="points">Almuerzos (Día 1 y Día 2).</li>
                    <li className="points">Coctel (Día 1).</li>
                  </ul>

                  <ul>
                    <p>Lo que Adobe no cubrirá:</p>
                    <li className="points">
                      Tiquetes aéreos (en caso de que aplique), serán
                      responsabilidad de la empresa.
                    </li>
                    <li className="points">
                      Transporte, aeropuerto - hotel - aeropuerto.
                    </li>
                    <li className="points">
                      Alimentos y bebidas adicionales fuera de las horas del
                      entrenamiento.
                    </li>
                    <li className="points">
                      El consumo del minibar de las habitaciones.
                    </li>
                    <li className="points">
                      Los servicios de lavandería o adicionales serán pagados
                      por el huésped.
                    </li>
                    <li className="points">
                      No nos haremos responsables de cualquier cambio solicitado
                      en la habitación para las personas que se quedan en el
                      hotel.
                    </li>
                    <li className="points">
                      Las cenas, comidas o aperitivos que se pidan a través del
                      servicio de "Room Service", serán cubiertos por el
                      huesped.
                    </li>
                  </ul>
                  <div className="button-and-checkbox">
                    <div className="checkbox">
                      <Radio.Group
                        offset="sm"
                        size="sm"
                        withAsterisk
                        orientation="vertical"
                        value={terms}
                        onChange={setTerms}
                      >
                        <Radio
                          value="Yes"
                          label="Si, acepto las condiciones para participar."
                          color="red"
                        />
                        <Radio
                          value="No"
                          color="red"
                          label="No podré participar, muchas gracias por la invitación."
                        />
                      </Radio.Group>
                    </div>

                    <div className="button-submit">
                      <button type="submit">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <h2 className="acrobat-resolve">¡Acrobat lo resuelve!</h2>
          </div>
        </div>
      </main>
      <footer>
        <div className="icons">
          <img src={AdobeLg} alt="Adobe" width={130} />
          <div className="social-networks">
            <a
              href="https://www.facebook.com/adobelatinoamerica"
              target="_blank"
            >
              <img src={Face} alt="Facebook" width={27} height={27} />
            </a>

            <a href="https://www.instagram.com/adobe_lat/" target="_blank">
              <img src={Insta} alt="Instagram" width={27} height={27} />
            </a>

            <a href="https://www.linkedin.com/company/adobe/" target="_blank">
              <img src={Ldin} alt="Linkedin" width={27} height={27} />
            </a>

            <a
              href="https://www.youtube.com/c/adobelatinoamericaoficial"
              target="_blank"
            >
              <img src={Youtube} alt="Youtube" width={27} height={27} />
            </a>

            <a href="https://twitter.com/AdobeLat" target="_blank">
              <img src={Twit} alt="twitter" width={27} height={27} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingForm;
