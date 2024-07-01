import React from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";

function NavBar() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <NavbarBrand />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarItem link="/" >
              Home
            </NavbarItem>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul class="dropdown-menu">
                <NavbarDropdownItem link="/calcApp">
                  Calculator App
                </NavbarDropdownItem>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <NavbarDropdownItem link="#">
                  placeholder
                </NavbarDropdownItem>
              </ul>
            </li>
          </ul>
          <button class="btn btn-outline-danger" type="submit">
            login
          </button>
          
        </div>
      </div>
    </nav>
  );
}


export default NavBar;