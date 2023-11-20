
class APISheetyFuncs{
    url;
    constructor(url){
        this.url = url;
    }
    //private for security
    get(filter){
        fetch(this.url+"/"+filter)
        .then((response) => response.json())
        .then(json => {
        var array = [];
        // Do something with the data
        //we got the data in json
        
        //json.emails[0].username
        
        
        console.log(json.emails[0].email)
        return json.emails;
        });
    }
    //private for security
    post(body){
        fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(body)
        })
          .then((response) => response.json())
          .then(json => {
            // Do something with object
            //we got to post the json ?
            console.log(json.email);
        });
    }
    //private for security
    put(id, body){
      
        fetch( (this.url +"/"+id), {
            method: 'PUT',
            body: JSON.stringify(body)
          })
          .then((response) => response.json())
          .then(json => {
            // Do something with object
            return json;
            console.log(json.email);
          });
    }
    //private for security
    delete(id){
        fetch((this.url+"/"+id), {
            method: 'DELETE',
          })
          .then((response) => response.json())
          .then(() => {
            console.log('Object deleted');
          });
    }

}
//creating table apis object
//user api
export const Users = new APISheetyFuncs('https://api.sheety.co/fb92c09eaad214da086d51fb7c8f7735/users/emails')

//