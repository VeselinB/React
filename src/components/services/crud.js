
//Uill Workshop

function request(method) {

    const getAuthHeader = () => {
        return (localStorage.getItem("token") && localStorage.getItem("token").length)
            ? {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'

            }
            : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
    }
    return async (url, data = undefined, options = {}) => {
        const authHeader = getAuthHeader();
        const response = await fetch(url, {
            method,
            headers: {
                ...authHeader
            },
            body: JSON.stringify(data),
            ...options
        })
        //console.log(response)
        if (!response.ok) {
            throw Error(response.statusText);
        }


        return response.json();
    }
}

export const get = request('get');
export const post = request('post');
export const put = request('put');
export const remove = request('delete');