var axios = require("axios");
  
const AuthFns={  
getUsers(dbUrl){
      return axios.get(dbUrl);
    },
authenticateUser(users,credential,salt){
    console.log(credential);
    if(users[credential.username]["password"]==credential.password){
        console.log("login success");
        return { 
            firstName: users[credential.username]["name"], 
            authTokenId: users[credential.username]["id"]*salt 
        };
    }else{
        throw "UnAuthorised Access detected!!!"
    }
}

}
module.exports =  AuthFns;
  
  