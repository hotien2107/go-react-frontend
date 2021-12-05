import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OneMovie = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await fetch('http://localhost:4000/v1/movie/' + id);
                setIsLoading(true);
                if (!res.ok) {
                    setError(res.status);
                    throw new Error(res.message);
                }

                const result = await res.json();
                setMovie(result.movie);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        };

        getMovie();
    }, [id]);

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading ....</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Fragment>
                    <h2>
                        Movie: {movie.title} {movie.id}
                    </h2>

                    <table className='table table-compact table-striped'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Title:</strong>
                                </td>
                                <td>{movie.title}</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Run time:</strong>
                                </td>
                                <td>{movie.runtime} minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            )}
        </Fragment>
    );
};

export default OneMovie;
