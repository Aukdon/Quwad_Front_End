
let url = import.meta.env.VITE_Backend_URL;
let tournamentURL = `${url}/tournaments`

async function getAllTournamentsAPI(){
    let res = await fetch(tournamentURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let data = await res.json();
    return data;
};

async function createTournament(payload) {
    let res = await fetch(tournamentURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    }); 
    let data = await res.json();
    return data; 
};

// Get all tournaments organized by a user.
async function tournamentsOrganizedAPI(payload) {
    // console.log(payload);
    
    let res = await fetch(`${tournamentURL}/organizedtournaments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    }); 
    let data = await res.json();
    // console.log(data);
    
    return data; 
}

async function updateTournament({...payload}) {
    
    let res = await fetch(`${tournamentURL}/${payload.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    return data;
}

async function deleteTournament({...payload}) {
    let res = await fetch(tournamentURL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    return data;
}

export {getAllTournamentsAPI, createTournament, tournamentsOrganizedAPI, updateTournament, deleteTournament};
