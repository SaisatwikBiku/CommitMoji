import React from 'react'

const SearchBar = ({ value, onChange }) => {
    return (
        <div className='flex justify-center items-center mb-8'>
            <input
                type="text"
                name="searchemoji"
                id="searchbox"
                className='w-[30rem] text-center font-medium p-2 px-4 rounded shadow border border-gray-300 focus:border-amber-500 outline-none'
                placeholder='Search your next commit emoji...'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar