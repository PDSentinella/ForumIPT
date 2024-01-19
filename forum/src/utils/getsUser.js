
export default function getUsers(filter="") {
    let retornavel
	let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/user'+'/'+filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    console.log(json.user);
    return json.user
    });
}
