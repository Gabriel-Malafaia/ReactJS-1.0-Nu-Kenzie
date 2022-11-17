import "./index.css";
import illustration from "../../../public/illustration.svg"
import Iniciar from "../../components/Iniciar";


const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <main className="animate__animated animate__fadeIn main__login">
      <div className="main__content">
        
        <Iniciar setIsLoggedIn={setIsLoggedIn}/>

        <div className="main__content--illustration">
          <img src={illustration} alt="Login Page Ilustration Image" />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
