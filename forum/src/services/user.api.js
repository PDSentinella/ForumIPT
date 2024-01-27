// user.api.js

const base_url = "https://iwork947.azurewebsites.net/api/";
async function loginUserPassword(email, password) {

    let userLogin = {
        email: email,
        password: password
    }

    try {
        console.log(userLogin);
        const response = await fetch(`${base_url}LogIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogin),
        });
        const data = await response.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function RegisterUser(name, email, genero, password, profile_image) {
    try {
        const response = await fetch(`${base_url}Register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                genero: genero,
                profile_image: profile_image
            }),
        });

        const data = await response.json();
        return data; 
    } catch (error) {
        console.log(error);
        throw error; 
    }
}




export {loginUserPassword, RegisterUser}