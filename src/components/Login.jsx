import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faGoogle, } from '@fortawesome/free-brands-svg-icons';


function Login() {

  const [username, setUername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  // const [errors, setError] = useState({});





  const handleSubmi = (e) => {
    e.preventDefault();
    console.log(username);
    // setError(validation(username))

  }

  const navigate = useNavigate()


  async function loginfn() {
    

    debugger

    let items = { username, password }
    console.log(items)
    fetch("http://localhost:3000/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function (response) {
      return response.json()
    })
      .then(function (data) {
        console.log(data);
        var v = JSON.stringify(data)
        console.log(v)
        if (data.auth === true) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("auth", data.auth)
          navigate("/dashboard");

        }
        else {
          // setErrorMessage("Wrong Username or Password....try again!")
          alert("wrong credentials....Try again")
          console.log("failed to login")
        }
      })

  }

  return (
    <>

      <section class="vh-90 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" id="logbox">
                <div class="card-body p-5 text-center">
                  <form onSubmit={handleSubmi}>
                  <div class="mb-md-5 mt-md-4 pb-5">

                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Please enter your login and password!</p>

                    <div class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX" value={username}
                        onChange={(e) => setUername(e.target.value)}>Username</label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX" value={password}
                        onChange={(e) => setPassword(e.target.value)}>Password</label>
                    </div>

                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                    <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={loginfn}>Login</button>

                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faFacebookF} /></a>
                      <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faTwitter} /></a>
                      <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faGoogle} /></a>
                    </div>

                  </div>
                  </form>

                  <div>
                    <p class="mb-0">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Login;