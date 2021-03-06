import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import { Grid } from '@mui/material';

const Body = () => {

    return (
        <Grid container justifyContent="center" sx={{ padding: 4 }}>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route><Home /></Route>
            </Switch>
        </Grid>
    );
};

export default Body;
