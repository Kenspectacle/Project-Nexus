import React from "react";
import NavbarDropdownItem from "./NavbarDropdownItem";

function NavbarDropdown({ name }) {
    return(
        <li class="nav-item dropdown">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {name}
                </a>
                <ul class="dropdown-menu">
                    <NavbarDropdownItem link="/calcApp">Calculator App</NavbarDropdownItem>
                    <li><hr class="dropdown-divider" /></li>
                    <NavbarDropdownItem link="#">placeholder</NavbarDropdownItem>
                </ul>
        </li>
    );
}

export default NavbarDropdown;