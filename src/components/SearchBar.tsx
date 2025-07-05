import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center'>
        <div><input type="text" name="search" id="searchbox" className='bg-white w-3xl font-medium p-2' placeholder='Search'/></div>
        <div>btn</div>
        <div>btn</div>
    </div>
  )
}

export default SearchBar