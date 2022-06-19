const CRUDCRUD = "e4b77c6ad5914dee859a754c50cfd91b";
const MOVIE_ENDPOINT = `https://crudcrud.com/api/${CRUDCRUD}/movies`;

const getFetchOptions = (method, data) => ({ 
    method: method, 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
});


export const getMovieList = async () => {
    try {
        const resp = await fetch(MOVIE_ENDPOINT);
        return await resp.json();
    } 
    catch(e) {
        console.log('There was an error retrieving the movielist', e);
        return null;
    }
};


export const createMovie = async (movie) => {
    try {
        const resp = await fetch(MOVIE_ENDPOINT, getFetchOptions("POST", movie))
        return await resp.json();
    }
    catch(e) {
        console.log('There was an error adding the movie', e);
        return null;
    }
};


export const updateMovie = async (_id, movieWithoutId) => {
    try {
        const resp = await fetch(`${MOVIE_ENDPOINT}/${_id}`, getFetchOptions("PUT", movieWithoutId));
        return resp;
    }
    catch(e) {
        console.log('There was an error updating the movie', e);
        return null;
    }
};

export const deleteMovie = async (_id) => {
    try {
        const resp = await fetch(`${MOVIE_ENDPOINT}/${_id}`, { method: "DELETE" })
        return resp;
    }
    catch(e) {
        console.log('There was an error deleting the movie', e);
        return null;
    }
};


 export const getMovieTitle = async (movieTitle) => {
    try {
        const OMDB_ENDPOINT = `https://www.omdbapi.com/?apikey=323f63a2&&t=${movieTitle}`
        const resp = await fetch(OMDB_ENDPOINT);
        return await resp.json();
    } 
    catch(e) {
        console.log('There was an error retrieving the movie.', e);
        return null;
    }
};