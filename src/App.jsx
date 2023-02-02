import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dash from './components/Dash';
import{BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import './app.css';
import Create from './container/Create'
import Details from './container/Details'
import Edit from './container/Edit';
import Protectedroutes from './Protectedroutes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/Login' element={<Login />}/>
          <Route exact path='/signup' element={<SignUp />}/>
          {/* <Route exact path='/dashboard' element={<Dash />}/> */}
          {/* <Route exact path='/create' element={<Create/>}/> */}
          {/* <Route exact path='/dashboard/getevent/:id' element={<Details />}/> */}
          {/* <Route exact path='/dashboard/update/:id' element={<Edit />}/> */}
          <Route exact path='/dashboard' element={<Protectedroutes Component={Dash} />}/>
          <Route exact path='/create' element={<Protectedroutes Component={Create} />}/>
          <Route exact path='/dashboard/getevent/:id' element={<Protectedroutes Component={Details} />}/>
          <Route exact path='/dashboard/update/:id' element={<Protectedroutes Component={Edit} />}/>
        </Routes>
    </div>
  );
}

export default App;