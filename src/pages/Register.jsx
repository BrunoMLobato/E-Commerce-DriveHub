import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Login.css";


const Register = () => {
  console.log("entrei")
  return (
    <body>
      <section className="container forms">
        <div className="form signup">
          <div className="form-content">
            <header>CADASTRO</header>
            <form action="#">
              <div className="field input-field">
                <input type="text" placeholder="Nome Completo" className="input" />
              </div>

              <div className="field input-field">
                <input type="email" placeholder="E-mail" className="input" />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Criar Senha" className="password" />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Repita a senha" className="password" />
                <i className='bx bx-hide eye-icon'></i>
              </div>

              <div className="field button-field">
                <button>Criar conta</button>
              </div>
            </form>

            <div className="form-link">
              <span>Já possui uma conta?
                <Link to="/login">
                  <p className="link login-link">Entre Agora!</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Register;
