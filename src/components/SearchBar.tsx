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
    "Graham Chapman"
]

function SearchBar() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    let updateInput = (e: SyntheticEvent) => {
        setInput((e.target as HTMLInputElement).value);
    }

    return (<>
    <InputGroup className="mb-3">
      {/* <InputGroup.Text id="basic-addon1">SEARCH</InputGroup.Text> */}
      <FormControl
        placeholder="Search for {dynamic input - Users / Groups / Reverb (for everything)}"
        aria-label="search-input"
        aria-describedby="basic-addon1"
      />
      {/* <input list="plain-input" name="plain-input" onChange={updateInput} />
      <datalist id="plain-input">
          {allUsers.map(user =>
            <option value={user} key={user} />
          )}
      </datalist> */}
      <Button  variant="secondary" onClick={handleSearch}>SEARCH</Button>
    </InputGroup>
    <ResultsList results={allUsers} />


</>)}

const findAllUsers = () => {
    return allUsers;
}

const handleSearch = () => {

}

const updateSearchResults = () => {

}

export default SearchBar;