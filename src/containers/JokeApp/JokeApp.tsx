import React, {useEffect, useState} from 'react';
import Joke from "../../components/Joke/Joke.tsx";

const JokeApp = () => {
    let url = 'https://api.chucknorris.io/jokes/random';
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        let response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setJoke(data);
        } else {
            console.error('Error:', response.status);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='text-center'>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                joke && <Joke text={joke.value} onChange={fetchData}/>
            )}
        </div>
    );
};

export default JokeApp;