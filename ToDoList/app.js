let toDo = [];

let req = prompt("Please enter the prompt to execute.");

while(true){
    
    if(req == "quit"){
        console.log("Quitting The APP.");
        break;
    }

    if(req == "list"){
        console.log("-----------------------------");
        for(let i=0; i < toDo.length; i++){
            console.log(i, toDo[i]);
        }
        console.log("-----------------------------");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add.");
        toDo.push(task);
        console.log("Task Added!");
    }else if(req == "delete"){
        let ind = prompt("Please enter the index of the task you want to delete");
        toDo.splice(ind,1);
        console.log("Task Deleted!");
    }else {
        console.log("Kindly enter the right prompt.");
    }


    req = prompt("Please enter the prompt to execute.");
}