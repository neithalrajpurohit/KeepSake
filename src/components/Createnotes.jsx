import { useNavigate } from 'react-router';
import { useNote } from '../context/note-context';

export const Createnotes = () => {
    const{list,setList,edit,setEdit,show,setShow,setTrash} = useNote();
    const idGenerator = Math.random();
    const navigate = useNavigate();
    
    const editHandler=(input)=>{
        setList(list.map((item)=>{
            if(item.id===input.id){
            return {
            ...item, 
            completed : !item.completed
            }
        }
           return item;
        }))
        setShow(true);
    }
    const deleteHandler=(input)=>{
        navigate('/trash');
        setList((prevItem)=>prevItem.filter((note)=>note !== input));
        setTrash((item)=>[...item,input]);
    }
    const updateHandler=(input)=>{
        if(edit){

           setList((lists)=>[...lists ,
            {
                text:edit,
                completed:false,
                id:idGenerator,
            }])
            setList((prevItem)=>prevItem.filter((item)=>item.id !== input.id))
            setEdit("");
            setShow(false);
        }else{
            return 'error'
        }
             }
return(
    <div>
         {list.map((input)=>(
                <div  key={input.id} className="textBox">
                <div className={input.completed ? "completed":""}>{input.text}</div>
                {!show && <button className="cls-btn"  onClick={()=>deleteHandler(input)}>❌</button>}
                {!show && <button className="cls-btn" onClick={()=>editHandler(input)}>✏️</button>}
                {input.completed && <div>
                 <input type="text"  placeholder="Edit here" onChange={(e)=>setEdit(e.target.value)}/>
                 <button onClick={()=>updateHandler(input)}>✍️</button>
                </div>
                 }
                </div>
            ))}
            <div>
            </div>
    </div>

    )
}
export default Createnotes;