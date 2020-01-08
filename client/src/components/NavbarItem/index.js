import React from "react";
import Button from "../Button"

function NavbarItem(props) {
    return (
<ul className="nav navbar-nav ml-auto w-100 justify-content-end">
    <li class="nav-item"> 
        <a class="nav-link" id="login" href="/shoppinglist">Shopping List</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="login" href="/cookbook">Cookbook</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" id="signup" href="/signup">Sign Up</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" style={{color: "black"}} id="login" href="/login">Login</a>
    </li>
    <li>
    <Button onClick={props.logout} style={{color: "black"}}>
    {/* When the user decides to log out, the navbar needs to change back */}
    Logout
    </Button>
    </li>
</ul>
  );
}

export default NavbarItem;
