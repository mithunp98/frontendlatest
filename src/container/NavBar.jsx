import "bootstrap/dist/css/bootstrap.min.css"
import './navbar.css'
import { useNavigate } from "react-router-dom";
import { Search } from "react-router";


function NavBar() {

  const navigate = useNavigate()

  function logoutfn(){
    localStorage.clear();
    navigate("/");

  }

  function searchfn(){

  }







  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div id="textcolor" class="navbar-brand" href="#">Event Planner</div>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a id="textcolor" class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a id="textcolor" class="nav-link" href="#">Add Event</a>
      </li>
    </ul>
    <form id="searchbar" class="form-inline my-2 my-lg-0">
      <input id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchfn}>Search</button>
    </form>
    <button id="logoutbttn" class="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={logoutfn}>Logout</button>
  </div>
</nav>
)
}

export default NavBar;