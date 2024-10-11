import React from 'react';

interface JokeProps {
    text: string;
    onChange: () => void;
}

const Joke: React.FC<JokeProps> = React.memo(({text, onChange}) => {
    return (
        <div className='text-center'>
            <div className='p-3 bg-body-secondary'>
                <p>{text}</p>
            </div>
            <button onClick={onChange} className='btn btn-primary mt-3'>Another joke</button>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.text === nextProps.text;
});

export default Joke;