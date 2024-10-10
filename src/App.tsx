import './App.css';
import MovieApp from "./containers/MovieApp/MovieApp.tsx";
import {useState} from "react";
import JokeApp from "./containers/JokeApp/JokeApp.tsx";

const App = () => {
    const [page, setPage] = useState(false);

    return (
        <>
            <button className="btn btn-outline-dark position-fixed bottom-0 start-50 translate-middle-x mb-3"
                    onClick={() => setPage(!page)}>
                {page ? '2 pages' : '1 pages'}
            </button>
            {page ? <MovieApp/> : <JokeApp/>}
        </>
    );
};

export default App;
