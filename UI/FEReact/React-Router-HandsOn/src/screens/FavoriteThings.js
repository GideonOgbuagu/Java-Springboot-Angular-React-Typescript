import React from 'react';
import { Route, Link } from 'react-router-dom';
import Things from '../screens/Things';

const FavoriteThings = ({ match }) => {
    return (
        <div>
            <h3>Favorite Things</h3>
            <ul>
                <li>
                    <Link to={`${match.url}/tesla`}>Favorite Car</Link>
                </li>
                <li>
                    <Link to={`${match.url}/french-fries`}>Favorite Food</Link>
                </li>
                <li>
                    <Link to={`${match.url}/slumdog-millionaire`}>Favorite Movie</Link>
                </li>
            </ul>
            <Route exact path={`${match.url}/:favThingId`} component={Things}/>
            <Route path={match.url} render={() => <h3>Select one favorite thing...</h3>}/>
        </div>
    )
}

export default FavoriteThings;