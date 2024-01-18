export default function postUser(){
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/user';
    let body = {
      user: {
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log();
    });
}