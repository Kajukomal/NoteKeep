import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
    const [list,setList]=useState([])
//Adding items to the array 
function addItems(newNote){
    setList((prev)=>{
        return [...prev,newNote]
    })
}

//Deleting items from array
function deleteItem(id){
setList((prev)=>{
    return prev.filter((noteItem,index)=>{
        return index!==id
    })
})
}
  return (
    <div>
      <Header />
      <CreateNote addItem={addItems}/>

      {list.map((note,index)=>{
        return  <Note key={index} id={index} title={note.title} content={note.content} 
        deleteNote={deleteItem}/>
      })}
     
      <Footer />
    </div>
  );
}

export default App;
