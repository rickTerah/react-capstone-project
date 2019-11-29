import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Register from '../../containers/register/Register';

const Protected = ({ user }) => (
    <React.Fragment>
        {user && (<div>
            {user.isAdmin && (
                <Route path="/register" component={Register} />
            )}
            {!user.isAdmin && (
                <Redirect to="/" />
            )}
        </div>)}
        {!user && (
            <Redirect to="/" />
            )}
    </React.Fragment>
)
 
export default Protected;