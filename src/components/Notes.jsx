import { useNote } from '../context/note-context';
import Createnotes from './Createnotes'

export const Notes = () => { 
    const{text,setText,setList} = useNote();
    const idGenerator = Math.random();
    
    return (
        <div className="note-cnt">
            <textarea className="input-style" value={text} placeholder = "Type a Note..." onChange={(e)=>setText(e.target.value)}/>
            <button className="btn-cmp" onClick={()=>{
                if(text===" "){
                 return;
                }else{
                    setList((type)=>[...type,{
                        text:text,
                        completed:false,
                        id:idGenerator,
                    }]);
                    setText(" ");
                }
            }}>Close</button>
            <div>
                <Createnotes/>
            </div>
     </div>
    )
}

