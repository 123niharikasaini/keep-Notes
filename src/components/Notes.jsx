import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Note from "./Note";

const Notes=()=>{
    const [content,setContent]=useState({
        title: "",
        des: "",
        
    });

    const [note,setNote]=useState([]);

    const change=(obj)=>{

    //     const value=obj.target.value;
    //     const name=obj.target.name;
    //     setContent((prev)=>{
    //         if(name=="title"){
    //             return {
    //                 title: value,
    //                 des: prev.des,
    //             };
    //     }
    //     else if(name=="des"){
    //         return {
    //             title: prev.title,
    //             des: value,
    //         };
    //     }
    // });

    // -------------------------more effecient---------//
    const {name,value}=obj.target;
    setContent((prev)=>{
        return{
            ...prev,
            [name]:value,
        };
    });

    };


    const save=()=>{
        setNote((old)=>{
            return[...old,content];
        

        });
        // console.log(note);
        setContent(()=>{return {title:"",des:""}});
    };

    const h=(obj)=>{
        obj.preventDefault();
    };

    const deleteItem=(id)=>{
        setNote((old)=>{
            return old.filter((arr,idx)=>{
                return id!==idx;
            })
        })
    };

    return(
        <>
        <div className="notes">
            <form onSubmit={h}>
                <input type="text" name="title" 
                placeholder="Title" value={content.title} onChange={change} autoComplete="false"/>
                <textarea rows={5} cols={40} 
               name="des" placeholder="Write a note..." 
               value={content.des} onChange={change}/>

               {/* <div className="option">
                <button className="color black" name="black" value={content.color}></button>
                <button className="color crimson" name></button>
                <button className="color pink"></button>
                <button className="color yellow"></button>
                <button className="color blue"></button>
                </div> */}
               
                <Button type="submit" className="button" onClick={save}>
                    <AddIcon/>
                </Button>
            </form>
        </div>

        <div className="content">
            {note.map((val,idx)=>{
               return <Note key={idx}
               id={idx}
               onSelect={deleteItem}
                title={val.title} 
                des={val.des}/>
            })}
        </div>
        </>
    )
}

export default Notes;