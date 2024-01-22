
export default function getPublicacao(filter="") {
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/publicacao'+"/"+filter;
    var value;
    fetch(url)
    .then(json => {
    // Do something with the data
    var value = json.publicacao
    return [];
    
    });
    
    
}
