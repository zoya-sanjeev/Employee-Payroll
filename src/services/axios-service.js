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
    deleteService(url = '', tokenRequired = false, httpOptions = null) {
        return axios.delete(url, tokenRequired && httpOptions);
    }
}
module.exports = new AxiosService()