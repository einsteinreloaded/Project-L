import serverUrl from '../../config/web.config';

import axios from 'axios';

const LoginServices={
    
    getAuthentication(username,password){
        return axios.get(serverUrl+"uname="+username+"&pword="+password);
    }

}

export default LoginServices;