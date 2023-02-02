import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Edit(){

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

    

    const handleUpdate = (e) => {
        e.preventDefault();

        let event = { eventname,eventdescription,eventdate}
        console.log(event)
  
        var request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState === 4 && this.status === 200) {
            console.log(this)
          }
        }
  
        request.open("PUT", `http://localhost:3001/update/${id}`);
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        console.log(JSON.stringify(event))
        // Sending the request to the server
        request.send(JSON.stringify(event));

        window.location.href="http://localhost:3000/dashboard"


        }





    return(
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleUpdate}>
        <div className="Auth-form-content" >
          <h2 className="Auth-form-title">Update</h2>
          <div className="form-group mt-3">
            <label>Event Name</label>
            <input
              type="text"
              value={eventname}
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEventname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Event Description</label>
            <input
              type="text"
              value={eventdescription}
              className="form-control mt-1"
              placeholder="Enter password"
              
              onChange={(e) => setEventdescription(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Event Date</label>
            <input
              type="text"
              value={eventdate}
              className="form-control mt-1"
              placeholder="Enter password"
              
              onChange={(e) => setEventdate(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default Edit;