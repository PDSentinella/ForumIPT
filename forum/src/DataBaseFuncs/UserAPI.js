export class UserAPI {
    #username;
    #email;
    #password;
    constructor(user){
        this.#username = user.username;
        this.#email = user.email;
        this.#password = user.password;
    }
    static loginPasswordVerifier(inputPass, realPass){
        //encryptation
        if(inputPass === realPass){
            return true;
        }
        return false;
    }
    getusername(){
        return this.#username;
    }
    getpassword(){
        return this.#password;
    }
    getemail(){
        return this.#email;
    }

    toJson(){
        return {username:this.#username,
                email:this.#email,
                password:this.#password}
     }


}