export async function addTodos(token, userid, todo) {
    const backend = process.env.NEXT_PUBLIC_CODEHOOKS_URL;
    const access = process.env.NEXT_PUBLIC_API_KEY;
    console.log(backend);
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





export async function getTodolist(token, userid, state) {
    console.log(userid)
    const backend = process.env.NEXT_PUBLIC_CODEHOOKS_URL+ "?userid="+ userid + "&isDone=" + state;
    const access = process.env.NEXT_PUBLIC_API_KEY;

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
    return data.reverse();
}




export async function markTodolist(token, state, id) {
    const backend = process.env.NEXT_PUBLIC_CODEHOOKS_URL + "/" + id;
    const access = process.env.NEXT_PUBLIC_API_KEY;

    const response = await fetch(backend,{
        'method': 'PATCH',
        'headers': {'Authorization': 'Bearer ' + token,
        'x-apikey': access,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({isDone: state}),
    }).catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    const data = await response.json().catch(e => {
        console.log("ERROS")
        console.log(e)
    });
    console.log(data);
    return data;
}

export async function getTodoitem(token, userid, id) {
    const backend = process.env.NEXT_PUBLIC_CODEHOOKS_URL + "?userid=" + userid + "&_id=" + id;
    const access = process.env.NEXT_PUBLIC_API_KEY;

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
    console.log(data);
    return data;
}


export async function updateTodo(token, userid, id, todo) {
    const backend = process.env.NEXT_PUBLIC_CODEHOOKS_URL + "/" + id + "?userid="+ userid;
    const access = process.env.NEXT_PUBLIC_API_KEY;

    const response = await fetch(backend,{
        'method': 'PATCH',
        'headers': {'Authorization': 'Bearer ' + token,
        'x-apikey': access,
        'Content-Type': 'application/json'},
        'body': JSON.stringify({todo: todo}),
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
