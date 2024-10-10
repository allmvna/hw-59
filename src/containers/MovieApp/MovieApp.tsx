import React, {useEffect, useState} from 'react';
import Movie from "../../components/Movie/Movie.tsx";

interface MovieProps {
    id: string;
    title: string;
}

const MovieApp = () => {
    const [movies, setMovies] = useState<MovieProps[]>(() => {
        const savedMovies = localStorage.getItem('movies');
        return savedMovies ? JSON.parse(savedMovies) : [];
    });

    const [newTitle, setNewTitle] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const addMovie = (e: React.FormEvent) => {
        e.preventDefault();

        if (newTitle.trim() === "") return;

        const newMovie = {
            id: String(new Date().getTime()),
            title: newTitle,
        };

        setMovies(prevMovies => [...prevMovies, newMovie]);
        setNewTitle('');
    };


    const deleteMovie = (id: string): void => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    const updateMovie = (id: string, newTitle: string): void => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id ? { ...movie, title: newTitle } : movie
            )
        );
    };

    return (
        <>
            <header className="bg-primary text-white text-center p-4">
                <h4>An application for tracking new movies</h4>
            </header>
            <div className='container'>
                <form className='mt-3 d-flex' onSubmit={addMovie}>
                    <input
                        value={newTitle}
                        type='text'
                        placeholder='Enter the name of the movie'
                        className="form-control me-2"
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark">
                        Add
                    </button>
                </form>
                <h5 className='mt-4'>To watch list:</h5>
                <div>
                    {movies.length === 0 ? (
                        <p>No movies.</p>
                    ) : (
                        movies.map(movie => (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                onDelete={() => deleteMovie(movie.id)}
                                onUpdate={(id, newTitle) => updateMovie(id, newTitle)}
                            />
                        ))
                    )}
                </div>
            </div>
        </>

    );
};

export default MovieApp;