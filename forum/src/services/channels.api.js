const base_url = "https://iwork947.azurewebsites.net/api/";


async function GetChannels(user_id) {

    try {
        const response = await fetch(`${base_url}GetChannels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id": user_id}),
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        throw error; 
    }
}


async function GetAllChannels(){
    try {
        const response = await fetch(`${base_url}GetAllChannels`, {
            method: 'GET'
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        throw error; 
    }
}


async function RegisterChannel(sendInfo){

    try{
        const response = await fetch(`${base_url}registeruserinchannel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: sendInfo,
        });
        return response.status;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { GetChannels, GetAllChannels, RegisterChannel }