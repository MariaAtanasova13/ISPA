import React from 'react';

import { withAuthorization } from '../session/withAuthorization';

const Homep = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
    </div>
);

const condition = authUser => !!authUser;

export default Homep;