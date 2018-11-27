import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AddInfo from './container/AddInfo'
import Thanks from './container/Thanks'
import Owner from './container/Owner'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact  component={AddInfo}/>
                <Route path={'/thanks'} exact  component={Thanks}/>
                <Route path={'/owner'} exact  component={Owner}/>


            
            </Switch>
        </div>
    );
}

export default Routes;
