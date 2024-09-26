import React from "react";
import NavbarDropdownItem from "./NavbarDropdownItem";

function NavbarDropdown({ name, children }) {
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
                    {children}
                </ul>
        </li>
    );
}

export default NavbarDropdown;