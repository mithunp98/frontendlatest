import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import './details.css'
import NavBar from "./NavBar";

function Details(){
    const {id} = useParams();
    const [eventname, setEventname] = useState("");
    const [eventdescription, setEventdescription] = useState("");
    const [eventdate, setEventdate] = useState("");


    useEffect( () => {
        axios.get(`http://localhost:3001/getevent/${id}`).then((response) => {
            console.log(response);
            console.log(response.data[0].eventname);
            setEventname(response.data[0].eventname);
            setEventdescription(response.data[0].eventdescription)
            setEventdate(response.data[0].eventdate)
        })
    }, []);







    







    return(
        <>
        <NavBar/>
        <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content" >
          <h2 className="Auth-form-title">View More Details</h2>
          <div className="form-group mt-3">
            <label>Event Name</label>
            <input
              id="inputcolorwq"
              type="text"
              value={eventname}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Event Description</label>
            <input
              id="inputcolorwq"
              type="text"
              value={eventdescription}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Event Date</label>
            <input 
              id="inputcolorwq"
              type="text"
              value={eventdate}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          {/* <div className="d-grid gap-2 mt-3 ">
            <Link to='./dashboard'><button id="backtohome" type="submit" className="btn btn-dark" >
              back to Home</button></Link>
          </div> */}
        </div>
      </form>
    </div>
    </>
    )
}
    

export default Details