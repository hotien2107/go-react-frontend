import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await fetch('http://localhost:4000/v1/genres');
                setIsLoading(true);
                if (!res.ok) {
                    setError(res.status);
                    throw new Error(res.message);
                }

                const result = await res.json();

                setGenres(result.genres);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        };

        fetchGenres();
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Fragment>
                    <h2> All Genres </h2>

                    <ul>
                        {genres.map((g) => (
                            <li key={g.id}>
                                <Link to={`/genres/${g.id}`}> {g.genre_name} </Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Genres;
