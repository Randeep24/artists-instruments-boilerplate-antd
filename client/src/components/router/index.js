import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from '../../App'

import ArtistDetailContainer from '../layout/ArtistDetailContainer'
import {ApolloClient, InMemoryCache} from "apollo-boost";
import {createHttpLink} from "apollo-link-http";
import {ApolloProvider} from "@apollo/react-hooks";


const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route path='/' component={App} exact/>
            <Route path='/artists/:id' component={ArtistDetailContainer}/>
        </Switch>
    </BrowserRouter>

)

export default Router