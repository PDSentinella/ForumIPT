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
        return data; // Assuming you want to return the data
    } catch (error) {
        throw error; // Rethrow the error to handle it in the component
    }
}


export { GetChannels }