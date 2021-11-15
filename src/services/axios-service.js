const axios = require('axios').default;
class AxiosService{
    postService(url = '', payload = null,tokenRequired = false, httpOptions = null ){
        return axios.post(url, payload, tokenRequired && httpOptions);
    }
    getService(url = '', payload = null, tokenRequired = false, httpOptions = null) {
        return axios.get(url, payload, tokenRequired && httpOptions);
    }
    putService(url='',data)
    {
        return  axios.put(url,data)
    }
}
module.exports = new AxiosService()