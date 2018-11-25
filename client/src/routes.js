import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AddInfo from './components/AddInfo'
import Thanks from './components/Thanks'

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
