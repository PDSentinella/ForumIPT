export default function putUsers(number="") {
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/user/'+number;
let body = {
  user: {
    nome:""
  }
}
fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body)
})
.then((response) => response.json())
.then(json => {
  // Do something with object
  console.log(json.user);
});
}