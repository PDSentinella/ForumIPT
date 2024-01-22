
export default function getCanais(filter="") {
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/canais'+"/"+filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    return json.canais;
    });
}
