import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch('http://localhost:4000/v1/movies');
                setIsLoading(true);
                if (!res.ok) {
                    setError(res.status);
                    throw new Error(res.message);
                }

                const result = await res.json();

                setMovies(result.movies);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        };

        fetchMovies();
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Fragment>
                    <h2> Choose a movie </h2>

                    <ul>
                        {movies.map((m) => (
                            <li key={m.id}>
                                <Link to={`/movies/${m.id}`}> {m.title} </Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Movies;
