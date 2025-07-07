import React from 'react'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='flex justify-center items-center mb-8'>
        <input
            type="text"
            name="search"
            id="searchbox"
            className='w-96 font-medium p-2 rounded shadow border border-gray-300 focus:border-blue-500 outline-none'
            placeholder='Search your next commit emoji...'
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default SearchBar