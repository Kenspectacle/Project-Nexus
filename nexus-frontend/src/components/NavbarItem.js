import React from "react";

const NavbarItem = ({ status, link, children}) => {
    return (
        <>
            <li class="nav-item">
              <a class={"nav-link " + status} aria-current="page" href={link}>
                {children}
              </a>
            </li>
        </>
    )
};

export default NavbarItem;