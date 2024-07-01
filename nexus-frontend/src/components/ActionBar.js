import React, { useState } from "react";
import ActionButton from "./ActionButton";

const ActionBar = ({ objectId, onNoteUpdate }) => {
    // TODO: make the editing section
    const [isEditing, setIsEditing] = useState(false);
    const [note, setNote] = useState("")

    const handleUpdateClick = () => {
        setIsEditing(true);
    };


    return (
        <>
            <ActionButton variant="update" objectId={objectId}></ActionButton>
            <ActionButton variant="delete" objectId={objectId}></ActionButton>
        </>
        
    );
}
export default ActionBar;
