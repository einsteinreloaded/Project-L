import urls from '../../config/web.config';

import axios from 'axios';

const WikiDataServices={
    
    getJsonData(id=""){
        return axios.get(urls.jsondataUrl+'/posts/'+id).then((res)=>{
            return res.data;
        });
    }
 

}

export default WikiDataServices;