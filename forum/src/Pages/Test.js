
function Test() {
    //"P","aluno24880@ipt.pt","PPPP"
    return (
    <div className="w-10 h-10 bg-pale_purple" onClick={makePost()}>
    </div>
    )
  }
  function makePost(){
    let url = 'https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/signupForm/emails';
    let body = {
        "email": {
        }
      } 
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.email);
    });
    console.log("Confirmation")
  }
  
  export default Test