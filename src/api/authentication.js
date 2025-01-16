let url = import.meta.env.VITE_Backend_URL

async function signInAPI(payload){
    let signInURL = `${url}/signin`;

    let res = await fetch(signInURL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(payload),
    });
    let data = await res.json();
    return data;
};

async function signUpAPI(payload){
    let signUpURL = `${url}/signup`;

    let res = await fetch(signUpURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    return data;
}

export {signInAPI, signUpAPI}