// import { SyntheticEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { InputGroup, Form, FormControl, Button, ButtonToolbar } from 'react-bootstrap'

function ResultsList({ results }: any) {
    
    return(<>{
        results.map((result: any) => <NavLink to="/" key={result}>{result}</NavLink>)
    }</>)
}

export default ResultsList;