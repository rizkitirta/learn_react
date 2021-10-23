import React, { useContext } from 'react'
import { UserContext } from '../views/context/User';

function Authenticated() {
    const {user,loading} = useContext(UserContext);
    return (
        loading ? <div>Loading..</div> : <div>My Name Is : {user.name}</div>
    );
}

export default Authenticated
