import { useContext, useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import searchicon from '../../Assets/icons/search.svg'
import '../SearchBar/searchbar.css'
import { useDispatch } from 'react-redux'
import { getArtistInfo } from '../../redux/actions/Events'

const SearchBar = () => {
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  let search = () => {
    dispatch(getArtistInfo(inputText))
  }
  return (
    <>
      <FormControl  className="searchfeild" variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          placeholder="Search artist"
          endAdornment={
            <InputAdornment position="end">
              <img
                src={searchicon}
                style={{ cursor: 'default' }}
                onClick={search}
              />
            </InputAdornment>
          }
          onChange={inputHandler}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>
    </>
  )
}

export default SearchBar
