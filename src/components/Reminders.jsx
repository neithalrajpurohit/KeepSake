import React from 'react'
import remImage from "../assets/rem.png";

export const Reminders = () => {
    return (
        <div className="note-cnt">
            <h1 className="sty-rem">Notes with upcoming reminders appear here!</h1>
                <img src={remImage} alt="rem" width="40px" height="40px"style={{ margin: "auto" }} className="img"/>
        </div>
    )
}
