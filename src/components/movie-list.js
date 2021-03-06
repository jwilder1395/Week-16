import React from 'react';
import Movie from './movie';
import { Button, Accordion } from 'react-bootstrap';

const MovieList = ({onNew, movieList, onDelete, onEdit}) => {

    return (
        <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mx-3">Watch List</h1>
                <Button variant="primary" className="mx-3" type="button" onClick={() => onNew()}>Add New Movie</Button>
            </div>
            <div className="mx-4 mb-2">
                {movieList
                    ? <Accordion>{movieList.sort((a, b) => a.title.localeCompare(b.title))
                        .map((movie, id) => 
                        (<Movie 
                            key={id} 
                            movie={movie} 
                            onDelete={onDelete} 
                            onEdit={onEdit} />))}
                    </Accordion> 
                    : <h2>No Movies to Show</h2>
                }
            </div>
        </div>
    )
};

export default MovieList;