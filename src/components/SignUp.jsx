import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import {  faTwitter , } from '@fortawesome/free-brands-svg-icons';
import {  faGoogle , } from '@fortawesome/free-brands-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';  

function SignUp() {

  const [firstnameReg, setFirstnameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [usernameReg, setUernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [dateofbirthReg, setDateofbirthReg] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameReg);
    window.location.href = 'http://localhost:3000/login'
  }





    async function registerfn(){

        let item={firstnameReg,lastnameReg,usernameReg,passwordReg,dateofbirthReg}
        console.log(item)
      
      
        let result = await fetch("http://localhost:3000/auth/register",{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
            "content-type": 'application/json',
            "Accept": 'application/json'
          }
        })
        result = await result.json()
        console.warn("result",result)
      
      }


      return(
        <>

        <section class="vh-90 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" id="logbox">
              <div class="card-body p-5 text-center">
    
                <div class="mb-md-2 mt-md-2 pb-2">
    
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">Please enter your login and password!</p>

                  <div class="form-outline form-white mb-1">
                    <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX" value={firstnameReg}
                  onChange={(e) => setFirstnameReg(e.target.value)}>firstname</label>
                  </div>

                  <div class="form-outline form-white mb-1">
                    <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX" value={lastnameReg}
                  onChange={(e) => setLastnameReg(e.target.value)}>lastname</label>
                  </div>
    
                  <div class="form-outline form-white mb-2">
                    <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX" value={usernameReg}
                  onChange={(e) => setUernameReg(e.target.value)}>Username</label>
                  </div>
    
                  <div class="form-outline form-white mb-2">
                    <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX" value={passwordReg}
                  onChange={(e) => setPasswordReg(e.target.value)}>Password</label>
                  </div>

                  <div>
                  
                  <DatePicker className="datepicker" selected={dateofbirthReg} onChange={(date) =>   setDateofbirthReg(date)} />
                  <label>Date of Birth</label>
                  </div>
                  <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
    
                  <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={registerfn}>register</button>
    
                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faFacebookF}/></a>
                    <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faTwitter}/></a>
                    <a href="#!" class="text-white"><FontAwesomeIcon id="icons" icon={faGoogle}/></a>
                  </div>
    
                </div>
    
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
    

export default SignUp;