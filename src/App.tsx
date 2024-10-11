import './App.css';
import MovieApp from "./containers/MovieApp/MovieApp.tsx";
import {useState} from "react";
import JokeApp from "./containers/JokeApp/JokeApp.tsx";

const App = () => {
    const [currentPage, setCurrentPage] = useState('movie');

    const renderPage = () => {
        switch (currentPage) {
            case 'movie':
                return <MovieApp />;
            case 'joke':
                return <JokeApp />;
            default:
                return <MovieApp />;
        }
    };

    return (
        <>
            <div className="btn-group position-fixed bottom-0 start-50 translate-middle-x mb-3">
                <button className="btn btn-outline-dark" onClick={() => setCurrentPage('joke')}>Joke</button>
                <button className="btn btn-outline-dark" onClick={() => setCurrentPage('movie')}>Movie</button>
            </div>
            {renderPage()}
        </>
    );
};

export default App;
