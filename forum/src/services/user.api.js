// user.api.js

const base_url = "http://localhost:7071/api/";
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
        return data; // Assuming you want to return the data
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to handle it in the component
    }
}

export default loginUserPassword;





//    let user = {
//     name: name,
//     email: email,
//     password: password,
//     profile_image: profile_image,
//     genero: genero,
//     admin_privileges: admin_privileges
// }