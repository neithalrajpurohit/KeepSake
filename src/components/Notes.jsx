import { useNote } from '../context/note-context';
export const Notes = () => { 
    const{text,setText,list,setList,edit,setEdit,show,setShow} = useNote();
    const idGenerator = Math.random();

    
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
        setList((prevItem)=>prevItem.filter((note)=>note !== input));
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
        </div>
    )
}

