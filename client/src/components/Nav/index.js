import React from "react";
import "./style.css";
import Button from "../Button"
import { Link } from "react-router-dom";


function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <Link to = "/">
    <a className="nav-title-uchef" href="/">
      EcoChef
    </a>
    </Link>

{/* <div class="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
<div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
<ul className="nav navbar-nav mr-sm-2 w-100 justify-content-end">
  <li class="nav-item"> 
{/* <a class="nav-link" id="login" href="/shoppinglist">Shopping List</a> */}
<Link to = "/shoppinglist">
<a className="nav-link" id="login">Shoppinglist</a>
</Link>
</li>
<li class="nav-item">
{/* <a class="nav-link" id="login" href="/cookbook">Cookbook</a> */}
<Link to = "/cookbook">
<a className="nav-link" id="login">Cookbook</a>
</Link>
</li>
<li class="nav-item"> 
{/* <a class="nav-link" id="login" href="/shoppinglist">Shopping List</a> */}
<Link to = "/dashboard">
<a className="nav-link" id="login">My Dashboard</a>
</Link>
</li>
<li class="nav-item"> 
{/* <a class="nav-link" id="login" href="/shoppinglist">Shopping List</a> */}
<Link to = "/mission">
<a className="nav-link" id="login">About Us</a>
</Link>
</li>

<li class="nav-item">
<a class="nav-link" id="signup" href="/signup" style={{color:"gold"}}>Sign Up</a>
</li>
<li class="nav-item">
<a class="nav-link" style={{color: "black"}} id="login" href="/login">Log In</a>
</li>
<li>
<Button onClick={props.logout} style={{color: "black"}}>
{/* When the user decides to log out, the navbar needs to change back */}
Logout
</Button>
</li>
</ul>
</div>

</nav>

  );
}

export default Nav;
