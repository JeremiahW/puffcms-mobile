const url = "https://api.51bakery.com/index.php/";
export default function fetchData(action, params, method='get') {
    let fullUrl = url+action;
    console.log("url:" + fullUrl, "method:" + method);
    console.log(params);
    return fetch(fullUrl, {
        method:method,
        headers:{
            'Accept': 'application/json, text/plain. */*',
            'Content-Type':'application/json'
        },
        body:params?JSON.stringify(params):null
    }).then((response)=>{
       // console.log(response);
        return response.json();

    });
}

export  function postForm(action, params) {
    let fullUrl = url+action;
    let formData  = new FormData();

    for(let name in params) {
        formData.append(name, params[name]);
    }

    return fetch(fullUrl, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        console.log(response);
        return response.json();
    });
}