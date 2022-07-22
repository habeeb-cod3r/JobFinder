import React, {useState} from 'react'
import './index.css';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'

export default function SearchBox() {
    const [query, setQuery] = useState("")
    return (
        <div className='searchbox'>
            <SearchIcon />
            <input 
            type='search' 
            placeholder='Filter by title, companies, experiese...' 
            />
        </div>
    );
     
}