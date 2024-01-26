const base_url = "https://iwork947.azurewebsites.net/api/";


async function GetUserPublications(user_id,page,InputFilter = ' ', AscDesc ='DESC') {
    try {
        const response = await fetch(`https://iwork947.azurewebsites.net/api/GetPublications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id":user_id,"Page":page,"InputFilter":InputFilter,"AscDesc":AscDesc}),
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

async function getPublicationComments(publication_id){
    try{
        const response = await fetch(`https://iwork947.azurewebsites.net/api/GetCommentsForPublication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"publication_id":publication_id}),
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