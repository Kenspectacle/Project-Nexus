import React from "react";

const NavbarLoginButton = ({ link, children }) => {
    return(
        <button class="btn btn-outline-danger" type="submit">
            <a class="dropdown-item" href={link}>
                {children}
            </a>
        </button>
    )
    
}

export default NavbarLoginButton;