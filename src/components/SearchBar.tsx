import { SyntheticEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputGroup, Form, FormControl, Button, ButtonToolbar } from 'react-bootstrap'

import ResultsList from './ResultsList'

let allUsers = [
  "Terry Jones",
  "Michael Palin",
  "Terry Gilliam",
  "John Cleese",
  "Eric Idle",
  "Graham Chapman",
]

function SearchBar() {
  const [input, setInput] = useState("");
  // const [results, setResults] = useState([]);

  // const findAllUsers = () => {
  //   return allUsers;
  // }

  const renderSearchResults = () => {
    if (input.length) {
      const results = allUsers.filter(
        user => user.toLowerCase()
        .includes(input.toLowerCase())
      )
      if (results.length) {
        return (<ResultsList results={results} />)
      }
      const items = "users";
      return (<p>{`No ${items} found`}</p>);
    }
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for {dynamic input - Users / Groups / Reverb (for everything)}"
          aria-label="search-input"
          aria-describedby="basic-addon1"
          value={input}
          onChange={(e: SyntheticEvent) => {
            setInput((e.target as HTMLInputElement).value)}}
        />
      </InputGroup>
      {renderSearchResults()}
    </>
  )
}

export default SearchBar;
