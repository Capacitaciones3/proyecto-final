import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { InputBase} from '@mui/material';

const Home = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginLeft: 0,
    width: '100%',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: '25px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: '25px',
      // vertical padding + font size from searchIcon
      paddingLeft: '25px',
      width: '100%',
    },
  }));

  return (
    <div>

    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}/>
    </Search>
    </div>
  )
}

export default Home