/**
 * Created by AneeqShah on 2/26/19.
 */

export const handleResponse = (response) => {

    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
};