const commonOptions = {
    mode: 'cors',
    redirect: 'follow',
};

const responseHandler = (res) => {
    if (res.ok) {
        return res.json();
    }
    const err = new Error(`Http error ${res.status}`);
    err.res = res;
    throw err;
};

export function fetchPokemonList() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1000`, commonOptions)
        .then(responseHandler);
}

export function fetchPokemonDetails(idOrName) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`, commonOptions)
        .then(responseHandler);
}

export function fetchPokemonTypeList() {
    return fetch(`https://pokeapi.co/api/v2/type/?limit=1000`, commonOptions)
        .then(responseHandler);
}

export function fetchPokemonTypeDetails(idOrName) {
    return fetch(`https://pokeapi.co/api/v2/type/${idOrName}/`, commonOptions)
        .then(responseHandler);
}