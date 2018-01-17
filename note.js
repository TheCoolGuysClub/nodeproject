const fs = require('fs');
const fetchNotes=()=>{
  const noteString = fs.readFileSync("notes-data.json");
  return JSON.parse(noteString);
}

const addNote =(title, body)=> {
  const node={
    title,
    body
    /*title:title,
    body:body*/
  }
  const notes = fetchNotes();
}

const listNote=(title,body)=>{

}

const removeNote=(title,body)=>{

}

const readNote=(title,body)=>{

}
