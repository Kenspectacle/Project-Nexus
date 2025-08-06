import React from "react";
import NavbarBrand from "./NavbarBrand.tsx";
import NavbarItem from "./NavbarItem.tsx";
import NavbarDropdownItem from "./NavbarDropdownItem.tsx";
import NavbarLoginButton from "./NavbarLoginButton.tsx";
import NavbarDropdown from "./NavbarDropdown.tsx";

function NavBar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <NavbarBrand />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarItem link="/">Home</NavbarItem>
            <NavbarDropdown name="Project">
              <NavbarDropdownItem link="/calcApp">Calculator App</NavbarDropdownItem>
              <li><hr class="dropdown-divider" /></li>
              <NavbarDropdownItem link="#">placeholder</NavbarDropdownItem>
            </NavbarDropdown>
          </ul>
          <NavbarLoginButton link="/login">login</NavbarLoginButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;