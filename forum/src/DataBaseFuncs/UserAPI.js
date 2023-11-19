class UserAPI {
    #username;
    #email;
    #password;
    constructor(userinfo){
        this.#username = userinfo.username;
        this.#email = userinfo.email;
        this.#password = userinfo.password;
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
        return {"email":
                    {
                        "username":`${this.#username}`,
                        "email":`${this.#email}`,
                        "password":`${this.#password}`
                    }
                }

    }
}