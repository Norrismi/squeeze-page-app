import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AddInfo from './container/AddInfo'
import Thanks from './container/Thanks'


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact  component={AddInfo}/>
                <Route path={'/thanks'} exact  component={Thanks}/>
            </Switch>
        </div>
    );
}

export default Routes;
