
let usersURL = `${import.meta.env.VITE_Backend_URL}/users`;

async function getUserDetails(payload){
    // console.log(payload);
    
    let res = await fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(payload),
    });
    let data = await res.json();
    return data
};

export {getUserDetails}