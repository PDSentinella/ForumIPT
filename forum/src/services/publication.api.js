const base_url = "https://iwork947.azurewebsites.net/api/";


async function GetUserPublications(user_id,page,InputFilter = ' ', AscDesc ='DESC') {
    try {
        const response = await fetch(`https://iwork947.azurewebsites.net/api/GetPublications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id":2,"Page":0,"InputFilter":" ","AscDesc":"DESC"}),
            //InputFilter = ' ' e o AscDesc = ´DESC´
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
        console.error("Error in GetUserPublications:", error);
        return []
    }
}

async function getPublicationComments(){
    try{
        const response = await fetch(`https://iwork947.azurewebsites.net/api/GetPublications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id":2,"Page":0,"InputFilter":" ","AscDesc":"DESC"}),
            //InputFilter = ' ' e o AscDesc = ´DESC´
        });

        // Check if the response status is in the range of 2xx (success)
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Return an empty array for a 404 response
            return [];
        }
    }
    catch(error){
        console.error("Error in getPublicationComments:", error)
        return []
    }
}




export { GetUserPublications}