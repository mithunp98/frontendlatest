import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import './search.css'
import NavBar from "./NavBar";

function Search(){
    const {searchTerm, setSearchTerm} = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3001/getevent/search',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    searchTerm
                }),
            });
            const data = await response.json();
            }catch(err){
                console.log(err);
            }
    };



    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
                <button type="submit">search</button>
        </form>
    );
}
    


































































   


//     useEffect( () => {
//         axios.get(`http://localhost:3001/getevent/${eventname}`).then((response) => {
//             console.log(response);
//             console.log(response.data[0].eventname);
//             setEventdescription(response.data[0].eventdescription)
//             setEventdate(response.data[0].eventdate)
//         })
//     }, []);







    







//     return(
//         <>
//         <NavBar/>
//         <div className="Auth-form-container">
//       <form className="Auth-form" >
//         <div className="Auth-form-content" >
//           <h2 className="Auth-form-title">Search result</h2>
//           <div className="form-group mt-3">
//             <label>Event Name</label>
//             <input
//               id="inputcolorwq"
//               type="text"
//               value={eventname}
//               className="form-control mt-1"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Event Description</label>
//             <input
//               id="inputcolorwq"
//               type="text"
//               value={eventdescription}
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Event Date</label>
//             <input 
//               id="inputcolorwq"
//               type="text"
//               value={eventdate}
//               className="form-control mt-1"
//               placeholder="Enter password"
//             />
//           </div>
//           {/* <div className="d-grid gap-2 mt-3 ">
//             <Link to='./dashboard'><button id="backtohome" type="submit" className="btn btn-dark" >
//               back to Home</button></Link>
//           </div> */}
//         </div>
//       </form>
//     </div>
//     </>
//     )
// }
    

export default Search;