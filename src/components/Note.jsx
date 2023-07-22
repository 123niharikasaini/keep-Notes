import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note=(props)=>{
return(
    <>
    <div className="single">
    <span className="title">
        {props.title}
    </span>
    <hr></hr>
    <span className="des">
        {props.des}
    </span>
    <span className="delete" onClick={()=>{props.onSelect(props.id)}}><DeleteIcon/></span>

    </div>
    </>
);
}

export default Note;