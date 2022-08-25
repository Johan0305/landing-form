import React from "react";
import { useState } from "react";
import Banner from "./assets/banner.png";
import { Checkbox } from "@mantine/core";

const LandingForm = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(company, name, email);
  };
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
                <div className="adobe-cover adobe-terms">
                  <ul>
                    <h3>Lo que Adobe cubre:</h3>
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
                </div>
                <div className="adobe-no-cover adobe-terms">
                  <ul>
                    <h3>Lo que Adobe no cubrirá:</h3>
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
                      el consumo del minibar de las habitaciones.
                    </li>
                    <li className="points">
                      los servicios de lavandería o adicionales serán pagados
                      por el huésped
                    </li>
                    <li className="points">
                      No nos haremos responsables de cualquier cambio solicitado
                      en la habitación para las personas que se quedan en el
                      hotel.
                    </li>
                    <li className="points">
                      Las cenas, comidas o aperitivos que se pidan a través del
                      servicio de "Room Service", serán cubiertos por el huesped
                    </li>
                  </ul>
                  <div className="checkbox">
                    <label htmlFor="checkbox">
                      Estoy de acuerdo con los términos y condiciones
                    </label>
                    <Checkbox color="red" radius="md" size="md" />
                  </div>
                  <div
                    onClick={(value) => {
                      console.log(value);
                    }}
                  >
                    Reserva tu agenda
                  </div>
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
            <h2>¡Acrobat lo resuelve!</h2>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default LandingForm;
