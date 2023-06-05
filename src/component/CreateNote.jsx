import React,{useState} from "react";

function CreateArea(props) {
    const[newNote,setNote]=useState({
        title:"",
        content:""
    })
//Handling and storing input state
function handleChange(event){
    const{name,value}=event.target;
    setNote((prev)=>{
       return{...prev,
        [name]:value
       }
    })
}
//Submit newNote to the array
function submit(event){
   {props.addItem(newNote)
    event.preventDefault()
   }
   setNote({
    title:"",
    content:""
   })
}
  return (
    <div>
      <form   className="create-note">
        <input onChange={handleChange} value={newNote.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={newNote.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
