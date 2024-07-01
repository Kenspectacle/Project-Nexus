import React from "react";

const ActionButton = ({ variant, link, body}) => {
    

    switch(variant) {
        case "update":
            return(
                <button
                type="button"
                className="btn btn-info"
                >
                update
                </button>
            )
        case "delete":
            return(
                <button
                type="button"
                className="btn btn-danger"
                >
                delete
                </button>
            )
    }

}

export default ActionButton