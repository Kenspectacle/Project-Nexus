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
            const parent = button.parentElement;
            console.log(parent instanceof HTMLElement);
            if (parent instanceof HTMLElement) {
                const grandparent = parent.parentElement;
                console.log("grandparent:", grandparent)
                if (grandparent && grandparent.parentElement) {
                    grandparent.parentElement.removeChild(grandparent);
                }
            }
            
        }
    }

    return(
        <button
            type="button"
            className={variant === "delete" ? "btn btn-danger" : "btn btn-info"}
            onClick={variant === "delete" ? sendDeleteRequest : undefined}
            ref={buttonRef}
        >
            {variant}
        </button>
    )

}

export default ActionButton