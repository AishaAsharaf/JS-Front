function add(){
    console.log(inp.value);
    if(inp.value){
        list.innerHTML += `<li>${inp.value}</li>`
    }
    else{
        alert("You haven't enetered anything")
    }
}