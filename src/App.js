import logo from "./images/logo.svg";
import vector1 from "./images/vector1.svg";
import vector2 from "./images/vector2.svg";
import vector3 from "./images/vector3.svg";
import vector4 from "./images/vector4.svg";
import vector5 from "./images/vector5.svg";
import "./App.css";

function App() {
  return (
    <div className="half-background flex justify-center flex-col items-center w-full h-screen">
      <img
        src={logo}
        class="h-48 w-full object-cover md:h-full md:w-48 kerry-logo"
        alt="logo"
      />
      <div class="flex flex-row max-h-[51.25em] max-w-[46.875rem] bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex h-full w-full">
          <div className="w-full flex flex-row justify-center box">
            <h1 className="welcome">
              Welcome to <span className="kerry-express">kerry Express</span>
            </h1>
            <h1 className="account">
              Have an Account ? <span className="kerry-express">Sign in</span>
            </h1>
            <h1 className="sign-up">Sign up</h1>
            <div className="frame">
              <h1 className="label">
                Username and email
                <input placeholder="         Username and email"></input>
              </h1>
              <img src={vector1} className="vector1" alt="vector1" />
              <h1 className="label">
                <img src={vector2} className="vector2" alt="vector2" />
                Username and email
                <input placeholder="         Username and email"></input>
              </h1>

              <h1 className="label">
                <img src={vector3} className="vector3" alt="vector3" />
                Phone<input placeholder="         Phone"></input>
              </h1>

              <h1 className="label">
                <img src={vector4} className="vector4" alt="vector4" />
                Password<input placeholder="         Password"></input>
              </h1>

              <h1 className="label">
                <img src={vector5} className="vector5" alt="vector5" />
                Confrim Password
                <input placeholder="         Confrim Password"></input>
              </h1>
            </div>
            <button className="front">
              Sign<span className="eiei">up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
