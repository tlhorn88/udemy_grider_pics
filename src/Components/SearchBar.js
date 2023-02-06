import { useState } from 'react';

function SearchBar({ onSubmit }) {
    // 1 - Create a new piece of state
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    // 2 - Create an event handler to watch for the 'onChange' event
    const handleChange = (event) => {
        // 3 - When the 'onChange' event fires, get the value from the input
        // console.log(event.target.value);
        // 4 - Take that value from the input and use it to update your state
        setTerm(event.target.value)
    };

    return <div>git pu
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
}

export default SearchBar;