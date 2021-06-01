import { useState } from "react";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import LogInForm from "../forms/LogInForm";
import SignUpForm from "../forms/SignUpForm"; 

const OutHome = () => {
    const [logInVisible, setLogInVisible] = useState(false);      
    const [signUpVisible, setSignUpVisible] = useState(false);
    
    const { REACT_APP_MY_ENV } = process.env;
    const showLogin = () => {
        setLogInVisible(true);
      }
      const showSignUp = () => {
        setSignUpVisible(true);
      }
      const hideLogIn = () => {
        setLogInVisible(false);
      }
      const hideSignUp = () => {
        setSignUpVisible(false);
      }
    return (
      <div className="card w-50 mt-5 shadow rounded align-self-center" >
        <div className="card-body d-flex flex-column justify-content-around align-items-center">
          <h2 className="card-title j">Welcome to Pet-Adopt!!</h2>
          <h4 className="card-text w-75 text-center">At Pet-Adopt we believe every pet should have a warm loving home.
                Let us help you find the right pet for you!</h4>
                <a className="btn btn-primary btn-lg m-5" href="http://localhost:3000/search/basic">search now!</a>
            <div className="d-flex">
                <button className="btn btn-primary" onClick={showLogin}>Login</button>
                <button className="btn btn-primary ms-5" onClick={showSignUp}>Sign-up</button>
            </div>
          <Rodal visible={logInVisible} onClose={hideLogIn} animation="slideUp" width="50" height="50" measure="%">
            <LogInForm />
            </Rodal>
            <Rodal visible={signUpVisible} onClose={hideSignUp} animation="slideDown" width="75" height="75" measure="%">
            <SignUpForm />
            </Rodal>
        </div>
      </div>
    );
}

export default OutHome;