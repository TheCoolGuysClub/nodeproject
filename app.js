const argv = require("yargs").argv;

const command = argv._[0]
  if(command ==="add"){
    console.log("Add function chosen");
}
if(command ==="list"){
  console.log("List function chosen");
}
if(command ==="read"){
  console.log("Read function chosen");
}
if(command ==="remove"){
  console.log("Remove function chosen");
}
//add, list, read, remove
