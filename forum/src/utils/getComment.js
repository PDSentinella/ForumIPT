
export default function getComment(filter="") {
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/ipt/comment'+"/"+filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    console.log(json.comments);
    });
}
