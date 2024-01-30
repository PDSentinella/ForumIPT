const base_url = "https://iwork947.azurewebsites.net/api/";


async function GetUserPublications(user_id,page=0,InputFilter, AscDesc ='DESC') {
    try {
        const response = await fetch(`${base_url}GetPublications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"user_id":user_id,"Page":page,"InputFilter":InputFilter,"AscDesc":AscDesc}),
            //InputFilter = ' ' e o AscDesc = ´DESC´
        });

        // Check if the response status is in the range of 2xx (success)
        if(response.status===202){
            return [];
        }
        else if (response.status===200) {
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

async function addComments(comentarioData){
    try{
        const response = await fetch(`${base_url}AddComment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comentarioData),
        });

        // Check if the response status is in the range of 2xx (success)
        if (response.status===200) {
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

async function getPublicationComments(publication_id){
    try{
        const response = await fetch(`${base_url}GetCommentsForPublication`, {
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

async function getUserData(user_id){
    try{const response = await fetch(`${base_url}GetUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"user_id":user_id}),
    });

    // Check if the response status is in the range of 2xx (success)
    if (response.status===200) {
        const data = await response.json();
        return data;
    } else {
        // Return an empty array for a 404 response
        return [];
    }}
    catch(error){
        console.error("Error in getUser:", error)
        return []
    }
}
async function addPublication(publicationData){
    try{const response = await fetch(`${base_url}AddPublication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(publicationData),
    });

    // Check if the response status is in the range of 2xx (success)
    if (response.status===200) {
        const data = await response.json();
        return data;
    } else {
        // Return an empty array for a 404 response
        return [];
    }}
    catch(error){
        console.error("Error in getUser:", error)
        return []
    }
}

async function setSavePublicationStatus(savedData){
    //mudar url, fazer a função
    try{const response = await fetch(`${base_url}SavePublication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedData),
    });

    // Check if the response status is in the range of 2xx (success)
    if (response.status===200) {
        const data = await response.json();
        return data;
    } else {
        // Return an empty array for a 404 response
        return [];
    }}
    catch(error){
        console.error("Error in getUser:", error)
        return []
    }
}
async function getUserSavedPublication(user_id,page){
    //mudar url, fazer a função
    try{const response = await fetch(`${base_url}GetPubsSaved`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"user_id":user_id/*,"Page":page*/}),
    });

    // Check if the response status is in the range of 2xx (success)
    if (response.status===200) {
        const data = await response.json();
        return data;
    } else {
        // Return an empty array for a 404 response
        return [];
    }}
    catch(error){
        console.error("Error in getUser:", error)
        return []
    }
}




export { GetUserPublications,getPublicationComments,getUserData,addPublication,setSavePublicationStatus,addComments,getUserSavedPublication}