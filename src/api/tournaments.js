
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

async function tournamentsOrganizedAPI(payload) {
    let res = await fetch(`${tournamentURL}/organizedtournaments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    }); 
    let data = await res.json();
    return data; 
}

export {getAllTournamentsAPI, createTournament, tournamentsOrganizedAPI};
