import React from "react";

const NavbarDropdownItem = ({ link, children }) => {
    return(
        <li>
            <a class="dropdown-item" href={link}>
                {children}
            </a>
        </li>
    )
    
}

export default NavbarDropdownItem;