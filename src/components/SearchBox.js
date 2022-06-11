import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBox = ({ setLocation }) => {

    const [search, setSearch] = useState("")

    const searchLocation = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
            .then(rest => setLocation(rest.data))

    }
    return (
        <div>
            <input className="inputSearch"
                type="text"
                onChange={e => setSearch(e.target.value)}
                value={search}
                placeholder="Type a location Id from 1 to 126"
            />
            <button onClick={searchLocation}>Search</button>

        </div>
    );
};



export default SearchBox;