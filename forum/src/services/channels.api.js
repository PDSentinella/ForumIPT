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

        // Check if the response status is in the range of 2xx (success)
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Return an empty array for a 404 response
            return [];
        }
    } catch (error) {
        // Log other errors, or handle them as needed
        console.error("Error in GetChannels:", error);
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