import { useNote } from "../context/note-context"

export const Trash = () => {
    const {trash} =useNote();
    return (
        <div className="note-cnt">
            {trash.map((input)=>
            <div  key={input.id} className="textBox1">
            <div className={input.completed ? "completed":""}>{input.text}</div>
            </div>
            )}
            {trash === " "  ? <h1 className="sty-rem"> No Trash!</h1> : ""}
            <div>
            </div>
        </div>
    )
}