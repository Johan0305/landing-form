import React from "react";
import Banner from "./assets/banner.png";

const LandingForm = () => {
  return (
    <div id="App">
      <header>
        <img src={Banner} alt="banner-adobe" />
      </header>
      <main>
        <div className="box-form-landing">
          <div className="form-landing">
            <form onSubmit={(data) => console.log(data)}>
              <div className="form-and-extra-info">
                <div className="form-input">
                  <label for="empresa">Empresa:</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label for="Nombre completo">Nombre Completo:</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label for="Email">Email:</label>
                  <input type="email" />
                </div>
                <div className="extra-info">
                  <ul>
                    <li>Esta invitación es personal e intransferible</li>
                    <li>
                      Esta invitación está limitada a 2 personas por empresa
                    </li>
                  </ul>
                </div>
              </div>

              <div className="terms-and-conditions"></div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingForm;
