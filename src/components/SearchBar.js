import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/SearchBar'
import { useAppContext } from '../context/appContext'
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchParams, setSearchParams] = useState('')
    const {getRecipes} = useAppContext()
    const navigate = useNavigate()

    const handleSearch = () => {
        getRecipes(searchParams)
        navigate('/recipes')
    }
    const handleChange = (e) => {
        const params = e.target.value
        setSearchParams(params)
    }
  return (
    <Wrapper>
        <input
            type='text'
            className='search-bar input'
            placeholder='What do you want to eat?'
            value={searchParams}
            onChange={handleChange}
        >
        </input>
        <button 
            type='button'
            className='btn btn-block'
            onClick={handleSearch}
        >
            Search
        </button>
    </Wrapper>
  )
}

export default SearchBar