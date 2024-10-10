import React from 'react';

interface MovieProps {
    id: string;
    title: string;
}

interface Props {
    movie: MovieProps;
    onDelete: (id: string) => void;
    onUpdate: (id: string, newTitle: string) => void;
}

const Movie: React.FC<Props> = React.memo(({movie, onDelete, onUpdate}) => {
    const [newTitle, setNewTitle] = React.useState(movie.title);

    const handleBlur = () => {
        if (newTitle.trim() && newTitle !== movie.title) {
            onUpdate(movie.id, newTitle);
        }
    };
    return (
        <div className='d-flex align-items-center mb-2'>
            <input
                type='text'
                value={newTitle}
                className="form-control me-2"
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleBlur();
                    }
                }}
            />
            <button className='btn btn-close' onClick={() => onDelete(movie.id)}></button>
        </div>
    );

    }, (prevProps, nextProps) => {
    return prevProps.movie.id === nextProps.movie.id && prevProps.movie.title === nextProps.movie.title;
});
export default Movie;