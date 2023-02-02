import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
import { Table } from "react-bootstrap";
import axios from "axios";
import './view.css'
import Edit from "./Edit";


export default class View extends React.Component {
  state = {
    evenList: []
  }
  


  deleteEvent(e,id){
    console.log(id)
    alert(`Are u sure u want to delete the event,${id}`)
    var request = new XMLHttpRequest();
    request.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
     console.log(this)
    }
  }
  request.open("DELETE", `http://localhost:3001/delete/${id}`);
  request.send();
  window.location.href='http://localhost:3000/dashboard'
  }



  editEvent(e,id){
    console.log(id)
    window.location.href='http://localhost:3000/dashboard/update/'+id;
    }

    viewEvent(e,id){
      console.log(id)
      window.location.href='http://localhost:3000/dashboard/getevent/'+id;
      }
 





      
    






  componentDidMount() {
    axios.get(`http://localhost:3001/dashboard`)
      .then(res => {
        const evenList = res.data;
        this.setState({ evenList });
      })
  }

 

  render() {
    return (
      <Table  striped hover className="tablecolor">
        <th className="headingcol">
          <td>#</td>
        </th>
        <th className="headingcol">
          <td>Event Name</td>
        </th>
        <th className="headingcol">
          <td>Event Description</td>
        </th>
        <th className="headingcol">
          <td>Event Date</td>
        </th>
        <th>
          <td className="headingcol">Action</td>
        </th>

        
        { this.state.evenList.map((evenList) => 
          <tr>
        <td>{evenList.id}</td>
        <td>{evenList.eventname}</td>
        <td>{evenList.eventdescription}</td>
        <td>{evenList.eventdate}</td>
        
            <td><input id="buttontext"
              type="button"
              className="form-control mt-1"
              placeholder="Enter email"
              value='Edit'
              onClick={(e) => this.editEvent(e, evenList.id)}
            />
            </td>
            <td><input id="buttondeletetext"
              type="button"
              className="form-control mt-1"
              placeholder="Enter email"
              value='delete'
              onClick={(e) => this.deleteEvent(e,evenList.id)}
            />
            </td>
            <td><input id="buttontextview"
              type="button"
              className="form-control mt-1"
              placeholder="Enter email"
              value='view'
              onClick={(e) => this.viewEvent(e,evenList.id)}
            />
            </td>
        </tr>
        )}
       
      </Table>
    )
  }
}



















