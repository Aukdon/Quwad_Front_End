
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

// Update user details
async function updateUserProfile({...payload}) {

    let res = await fetch(usersURL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(payload),
    });
    let data = await res.json();
    return data;
}

// Add to my registration.
async function updateMyRegistations({...payload}) {
    
    // console.log(payload);
    let res = await fetch(`${usersURL}/myregistrations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    });
    let data = res.json();
    return data;
}

// fetch all registation details.
async function fetchMyRegistrations({...payload}){
    let res = await fetch(`${usersURL}/myregistrations?emailId=${payload.emailId}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        },
    });

    let data = res.json();
    return data;
}

export {getUserDetails, updateMyRegistations, fetchMyRegistrations, updateUserProfile}