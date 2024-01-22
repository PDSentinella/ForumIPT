export default function postUser(){
  let url = 'https://api.sheety.co/96746cd1ec0da26ab33a53d1667461a4/ipt/user';
  let body = {
    user: {
      
        "nome": "Paulo",
        "email": "aluno@",
        "password": 1234,
        "telefone": 960333111,
        "location": "Tomar",
        "atype": "Aluno",
        "job": "Student",
        "aboutMe": "My name is...",
        "img": "https://w0.peakpx.com/wallpaper/367/169/HD-wallpaper-heart-aesthetic.jpg",
        "id": 2
    
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json);
  });
}