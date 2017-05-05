import serverUrl from '../../config/web.config';

import axios from 'axios';

const LoginServices={
    
    getAuthentication(username,password){
        return axios.get(serverUrl+"uname="+username+"&pword="+password).then((res)=>{
            return res.data;
        });
    }

}

export default LoginServices;