import React from 'react'

function Search(props){
            return (
            <div className='search-div'>
                <input className='search-input'
                    type="text"
                    onChange={props.onChange}
                    value={props.searchTerm}
                    placeholder='найти задание'
                />
            </div>
        )
}

export default Search;
