import { createContext,useContext,useState } from "react";

export const NoteContext = createContext();

export function NoteProvider({children}){
const[text,setText]=useState("");
const[list,setList]=useState([]);
const[edit,setEdit]=useState("");
const[show,setShow]=useState(false);
const[hide,setHide]=useState(false);
const[trash,setTrash]=useState([]);
    return(
        <NoteContext.Provider
        value = {{
            text,
            setText,
            list,
            setList,
            edit,
            setEdit,
            show,
            setShow,
            hide,
            setHide,
            trash,
            setTrash,
        }}
        >
        {children}
        </NoteContext.Provider>
    )
}
export const useNote = () => {
    return useContext(NoteContext);
}
export default NoteContext;

