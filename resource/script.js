async function dados() {
    const api = await fetch("https://Jsonplaceholder.typicode.com/users")
    if(api.status === 200){
       console.log(api);
        
    }
    
    
}

await dados();