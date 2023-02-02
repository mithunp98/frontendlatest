import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import './create.css'
import NavBar from "./NavBar";
import { ToastContainer, toast } from 'react-toastify';


const Create = () => {

    const [eventname, setEventname] = useState('');
    const [eventdescription, setEventdescription] = useState('');
    const [eventdate, setEventdate] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventname);
        toast.success("successfully added!")
        window.location.href='http://localhost:3000/dashboard'
    }





    function addEvent() {
        let event = { eventname,eventdescription,eventdate}
        console.log(event)
  
        var request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState === 4 && this.status === 200) {
            console.log(this)
          }
        }
  
        request.open("POST", `http://localhost:3001/create`);
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        console.log(JSON.stringify(event))
        // Sending the request to the server
        request.send(JSON.stringify(event));


    }















    return (
        <>
        <ToastContainer/>
        <NavBar/>
        <Form className="createform" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Event Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter name of event" value={eventname} onChange={(e) => setEventname(e.target.value)}/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Event Description</Form.Label>
        <Form.Control required type="text" placeholder="Enter description" value={eventdescription} onChange={(e) => setEventdescription(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Event Date</Form.Label>
        <Form.Control required type="text" placeholder="dd/mm/yyyy" value={eventdate} onChange={(e) => setEventdate(e.target.value)}/>
      </Form.Group>
      <Button variant="dark" type="submit" onClick={addEvent}>
        Submit
      </Button>
    </Form>
    </>
    )
};


export default Create;