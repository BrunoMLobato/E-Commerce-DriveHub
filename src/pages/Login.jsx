import React, { useState, useEffect } from 'react';
import "../styles/Login.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";





const Login = () => {

  const [typePassowrd, setTypePassword] = useState("password");

  return (
    <body>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header> LOGIN </header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="E-mail" className="input" />
              </div>

              <div className="field input-field">
              <input type={typePassowrd} placeholder="Senha" className="password" />         
               <div className="eye-icon">      
        
{typePassowrd === "password" ? (
                  <VisibilityIcon style={{ color: "#CECECE", marginRight: "10px", marginLeft: "10px", fontSize: "1.2em", cursor: "pointer"}} onClick={() => setTypePassword("text")}/>
                ) : (
                <VisibilityOffIcon style={{ color: "#CECECE", marginRight: "10px", marginLeft: "10px", fontSize: "1.2em", cursor: "pointer"}} onClick={() => setTypePassword("password")}/>)}
               
               </div>
</div>

              <div className="form-link">
                <a href="#" className="forgot-pass">Esqueceu Senha?</a>
              </div>

              <div className="field button-field">
                <button>ENTRAR</button>
              </div>
            </form>

            <div className="form-link">
              <span>Já possui uma conta? 
                <Link to="/register">
                  <p className="link login-link">Cadastre Agora!</p>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default Login;