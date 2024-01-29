
const base_url = "https://iwork947.azurewebsites.net/api/";


// Função para ir buscar as contagens relativas aos users , pubs, comments...

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

//---------------------------- Funçoes do dashboard relatias as Publicações ----------------------------------

async function GetPubs(){
    try {
        const response = await fetch(`${base_url}getpubs`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data)
        return data; 
    } catch (error) {
        throw error; 
    }
}


async function UpdatePubById(updatepub){
    try {
        const response = await fetch(`${base_url}UpdatePubById`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatepub),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeletePubById(Pub){
    try {
        const response = await fetch(`${base_url}DeletePublication`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Pub),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

//---------------------------- Funçoes do dashboard relatias aos canais ----------------------------------

async function CreateChannel(nome, senha, channel_image) {
    try {
        const response = await fetch(`${base_url}AddChannel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha,
                channel_image: channel_image
            }),
        });

        const data = await response.json();
        return data; 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}

async function GetChannels(){
    try {
        const response = await fetch(`${base_url}GetCanaisDashBoard`, {
            method: 'GET'
        });
        const data = await response.json();
        console.log(data)
        return data; 
    } catch (error) {
        throw error; 
    }
}


async function UpdateChannelById(updatechannel){
    console.log(updatechannel)
    try {
        const response = await fetch(`${base_url}UpdateChannelById`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatechannel),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function DeleteChannelById(channel){
    try {
        const response = await fetch(`${base_url}DeleteChannel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(channel),
        });

      return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


//---------------------------- Funçoes do dashboard relatias ao USER ----------------------------------

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


export { GetCounts, GetUsersDash, UpdateUserById, DeleteUserById, GetPubs, GetChannels, DeletePubById, DeleteChannelById, UpdatePubById, UpdateChannelById, CreateChannel}
