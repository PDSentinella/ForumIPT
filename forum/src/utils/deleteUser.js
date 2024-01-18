export default function deleteUser(number=2){
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/user/2';
    fetch(url, {
    method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => {
    console.log('Object deleted');
    });
}
