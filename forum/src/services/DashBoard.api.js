
const base_url = "https://iwork947.azurewebsites.net/api/";

async function GetCounts(){
    try {
        const response = await fetch(`${base_url}GetCounts`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data)
        return data; 
    } catch (error) {
        throw error; 
    }
}

async function GetUsersDash(){
    try {
        const response = await fetch(`${base_url}GetUsers`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data)
        return data; 
    } catch (error) {
        throw error; 
    }
}

async function UpdateUserById(updateUser){
    try {
        const response = await fetch(`${base_url}UpdateUserById`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeleteUserById(updateUser){
    try {
        const response = await fetch(`${base_url}DeleteUserById`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


export { GetCounts, GetUsersDash, UpdateUserById, DeleteUserById }