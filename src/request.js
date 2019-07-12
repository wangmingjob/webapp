import axios from "axios";

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

export function request(method = HttpMethod.GET, url, data = {}, credentials = false) {
    const options = {
        method: method,
        url: url,
        headers: {
            Accept: 'application/json',
            OSName: 'iphone9',
            OSVersionCode: 'iphone9',
            OSVersionName: 'iphone9',
            Brand: 'iphone9',
            DeviceID: 'iphone9',
            IMEI: 'iphone9',
            admin: 'xiaobala891007'
        },
        withCredentials: credentials,
    };

    if (method === HttpMethod.GET) {
        options.params = data;
    } else {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.data = data;
    }

    return axios(options)
        .then(function (response) {
            console.log('[Response]=>', response);
            if (response.status === 200) {
                return response.data;
            }
        })
        .then(function (result) {
            console.log('[Response 200, body]=>', result);
            if (result.code === 200) {
                return result.data;
            }
        })
        .catch(function (error) {
            console.log('[Response error]=>', error);
        });
}
