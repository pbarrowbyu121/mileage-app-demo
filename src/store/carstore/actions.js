/*
export function someAction (context) {
}
*/

// GET requests
export function getCarsAction({ commit }) {
    fetch("http://localhost:3000/cars")
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log("response from get Cars", response)
        commit('GET_CARS_MUTATION', response);
    });
}

export function getTanksAction({ commit }) {
    fetch("http://localhost:3000/tanks")
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log("response from get Tanks", response)
        commit('GET_TANKS_MUTATION', response);
    });
}

// DELETE requests
export function deleteTanksAction({}, id) {
    const deletePromise = fetch(`http://localhost:3000/tanks/${id}`, {
        method: "DELETE"
    });
    return deletePromise
}

export function deleteCarAction({}, id) {
    const deleteCarPromise = fetch(`http://localhost:3000/cars/${id}`, {
        method: "DELETE"
    });
    return deleteCarPromise
}

