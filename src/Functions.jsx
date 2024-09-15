export const fetchApi = async (method, uri) => {
    const host = "http://localhost:8000/api";

    return fetch(host + uri, {
            method: method,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(res => {
            return res;
        })
}

export const checkToken = async() => {
    var currentTime = new Date().getTime();
    var expireTime = new Date(localStorage.getItem("token_expired")).getTime();

    if(currentTime > expireTime){
        localStorage.clear();
    }
}