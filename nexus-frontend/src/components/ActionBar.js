import React from "react";
import ActionButton from "./ActionButton";

const ActionBar = ({ objectId }) => {
    return (
        <>
            <ActionButton variant="update" objectId={objectId}></ActionButton>
            <ActionButton variant="delete" objectId={objectId}></ActionButton>
        </>
        
    );
}
export default ActionBar;
