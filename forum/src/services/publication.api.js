const base_url = "https://iwork947.azurewebsites.net/api/";

// Todas as funções relacionadas com os publicações encontram-se neste ficheiro.

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

async function GetUserPublicationsWithFilter(user_id,page=0,InputFilter, AscDesc ='DESC') {
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


// Função responsavel pela adição de comentarios.

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


// Função responsavel por ir buscar os comentarios para uma publicação.

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

// Função responsavel por ir buscar os dados do utilizador.

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

// Função responsavel por adicionar uma publicação.

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

// Função responsavel por salvar / associar uma publicação ao utilizador.

async function setSavePublicationStatus(savedData){
    //mudar url, fazer a função
    try{const response = await fetch(`https://iwork947.azurewebsites.net/api/SavedTrue`, {
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

// Função responsavel por retirar uma publicação ao utilizador.

async function deleteSavePublicationStatus(savedData){
    //mudar url, fazer a função
    try{const response = await fetch(`https://iwork947.azurewebsites.net/api/SavedFalse`, {
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

// Função responsavel por ir buscar as publicações salvas para um utilizador.

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




export { GetUserPublications,getPublicationComments,getUserData,addPublication,setSavePublicationStatus,addComments,getUserSavedPublication,deleteSavePublicationStatus, GetUserPublicationsWithFilter}