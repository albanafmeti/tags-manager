const axiosInstance = require('axios').create();

const API_URL = process.env.VUE_APP_API_URL;
const API_TOKEN = process.env.VUE_APP_API_TOKEN;

class HttpClient {

    constructor() {
        axiosInstance.defaults.baseURL = API_URL;
    }

    get(url, params = {}) {

        let options = {
            params: {
                api_token: API_TOKEN,
                ...params
            }
        };

        return axiosInstance.get(url, options);
    }

    post(url, data) {

        let options = {
            params: {
                api_token: API_TOKEN
            }
        };

        return axiosInstance.post(url, data, options);
    }

    delete(url) {

        let options = {
            params: {
                api_token: API_TOKEN
            }
        };

        return axiosInstance.delete(url, options);
    }
}

export default new HttpClient();
