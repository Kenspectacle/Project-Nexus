import React, { useRef, useEffect } from "react";

const ActionButton = ({ variant, objectId}) => {
    const buttonRef = useRef(null);
    useEffect(() => {
        // This will run after the component mounts, ensuring the DOM is ready
        console.log(buttonRef.current); // This should log the button element
    }, []);

    async function sendDeleteRequest() {
        try {
            const response = await fetch('http://localhost:8080/deleteHistoryEntry/' + objectId, {
                method: 'DELETE'
            });

            if (response.ok) {
                console.log('Delete successful:');
                removeRow();
            } else {
                console.error('Delete failed:', response.status, response.statusText);
            }
            

        } catch (error) {
            console.error('Error:', error);
        }
    }

    // helper function
    function removeRow() {
        const button = buttonRef.current;
        console.log("button:" , button)
        if (button) {
            const grandparent = button.parentElement.parentElement;
            console.log("grandparent:", grandparent)
            if (grandparent && grandparent.parentElement) {
                grandparent.parentElement.removeChild(grandparent);
            }
        }
    }

    switch(variant) {
        case "update":
            return(
                <button
                type="button"
                className="btn btn-info"
                ref={buttonRef}
                >
                update
                </button>
            )
        case "delete":
            return(
                <button
                type="button"
                className="btn btn-danger"
                onClick={sendDeleteRequest}
                ref={buttonRef}
                >
                delete
                </button>
            )
    }

}

export default ActionButton