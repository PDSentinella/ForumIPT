// user.api.js

const base_url = "https://api.sheety.co/ffdb13d8e039b333b69d51a1e78c54aa";
async function loginUserPassword(email) {
    try {
        console.log(email)
        const response = await fetch(`${base_url}/baseDados/users?filter[email]=${email}`);
        const data = await response.json();
        console.log(data.users);
        return data; // Assuming you want to return the data
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to handle it in the component
    }
}

export default loginUserPassword;