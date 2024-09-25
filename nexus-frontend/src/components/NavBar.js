import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";
import NavbarLoginButton from "./NavbarLoginButton";
import NavbarDropdown from "./NavbarDropdown";

// const categories = {
//   0: {
//     name: "categ1",
//     link: "/categ",
//     id: "vsdjbuhj"
//   }
// } 

// function rendewrITem() => {
//   return (
//     <NavbarDropdownItem link="/calcApp"></NavbarDropdownItem>
//   )
// }

function NavBar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <NavbarBrand />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {/* {categories.map(_index, item => () { 
               return item.name
          }  */}
            <NavbarItem link="/">Home</NavbarItem>
            <NavbarDropdown name="Project" />              
          </ul>
        <NavbarLoginButton link="/login">login</NavbarLoginButton>
        </div>
      </div>
    </nav>
  );
}


export default NavBar;