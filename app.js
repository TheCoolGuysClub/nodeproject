const yargs = require('yargs');
const argv = yargs
.command("add", "Adds a new note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  },
  body: {
    describe: "content of note",
    alias: "b",
    demandOption: true,
  }
})
.command("remove", "Remove a note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  }
})
.command("list", "List all notes")
.command("read", "read a note", {
  title: {
    describe: "Title of note",
    alias: "t",
    demandOption: true
  }
})
.help()
.argv;
const notes = require("./note.js");
const command = argv._[0]

  if(command ==="add"){
    const title = argv.title;
    const body = argv.body;

    // notes.addNote(title,body);
    const noteAdded = notes.addNote(title,body);
    // console.log(noteAdded);
    if(noteAdded){
      console.log("Your note was added");
    }
    else{
      // console.log(noteAdded);
      console.log("This note already exists");
    }
  }
  if(command ==="list"){
    const title = argv.title;
    const body = argv.body;
    notes.listNote(title,body);
  }
  if(command ==="read"){
    const title = argv.title;
    const body = argv.body;
    const noderead = notes.readNote(title);
    if(noderead){
      console.log();
    }
    else{
      console.log("no such node exists");
    }
  }
  if(command ==="remove"){
    const title = argv.title;
    const body = argv.body;
    // notes.removeNote(title);
    const nodeRemoved = notes.removeNote(title);
    if(nodeRemoved){
    console.log("Your node is removed");
    }
    else{
    console.log("no such node exists");}

  }
