import {Link} from "react-router-dom";
import iconImage from "../assets/menu.png";
import noteImage from "../assets/note.png";
import remImage from "../assets/rem.png";
import serverImage from "../assets/server.png";
import trashImage from "../assets/trash.png";
import { useNote } from "../context/note-context";
export const Header = () => {
    const {hide,setHide}=useNote();
    return (
        <div className="note-cnt">
            <nav className="navigation">
                <button  onClick={()=>setHide((hide)=>!hide)}>
                <img src={iconImage} alt="icon" width="20" height="20" />
                </button>
                    <img src={serverImage} alt="server" width="40" height="30" className="serv-img"/>
                    𝌡
                    <h1 className="nav-brand">Keepsake</h1>
            </nav>{" "}
                    <div>
                    <div>
                    <br/>
                           {!hide && <Link to ="/" className="vd-link">
                            Notes</Link>}
                            <img src={noteImage} alt="note" width="20" height="20" className="img-style"/>
                    </div>
                    <div>
                    <br/>
                           {!hide && <Link to ="/reminders" className="vd-link">
                            Reminders</Link> }
                            <img src={remImage} alt="rem" width="20" height="20" className="img-style"/>
                    </div>
                        <br/>
                            {!hide && <Link to ="/trash" className="vd-link"> 
                            Trash</Link>}
                            <img src={trashImage} alt="trash" width="20" height="20" className="img-style"/>
                    </div>

        </div>
    )
}


