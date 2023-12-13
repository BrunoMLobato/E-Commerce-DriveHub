import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Login.css";

const ResetPassword = () => {
  
  return (
    <body>
      <section className="container forms">
        <div className="form signup">
          <div className="form-content">
            <header>Esqueci Senha</header>
            <p class="descricao"> Enviaremos um e-mail com as informações de recuperação. </p>
            <form action="#">

              <div className="field input-field">
                <input type="email" placeholder="E-mail" className="input" />
              </div>

              <div className="field button-field">
                <button>Recuperar Senha</button>
              </div>
            </form>

            <div className="form-link">
              <span>Já possui uma conta?
                <Link to="/login">
                  <p className="link login-link">Voltar para Login</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default ResetPassword;
