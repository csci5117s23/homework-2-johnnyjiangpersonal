export async function addTodos(token, userid, todo) {
    const backend = "https://backend-lebq.api.codehooks.io/dev/todolist";
    const access = "af51eaa1-449e-4100-829b-6093eaa3387f";

    const response = await fetch(backend,{
        'method': 'POST',
        'headers': {'Authorization': 'Bearer ' + token,
        'x-apikey': access,
        'Content-Type': 'application/json'},
        'body':JSON.stringify({userid, todo}),
    }).catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    const data = await response.json().catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    return data;
}





export async function getTodolist(token) {
    const backend = "https://backend-lebq.api.codehooks.io/dev/todolist";
    const access = "af51eaa1-449e-4100-829b-6093eaa3387f";

    const response = await fetch(backend,{
        'method': 'GET',
        'headers': {'Authorization': 'Bearer ' + token,
        'x-apikey': access,
        'Content-Type': 'application/json'},
    }).catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    const data = await response.json().catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    return data;
}