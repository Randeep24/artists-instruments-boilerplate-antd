import React from 'react'
import {ApolloClient, InMemoryCache} from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {createHttpLink} from 'apollo-link-http'

import '../../App.css'

import {Layout} from "antd";
import {useQuery} from "@apollo/react-hooks";
import {GET_ARTIST} from "../../queries/index";
import {useHistory} from "react-router-dom";

import ArtistDetail from "./ArtistDetail"


const {Content} = Layout


const ArtistDetailContainer = () => {

    const pathName = window.location.href;
    const id = pathName.substring(pathName.lastIndexOf('/') + 1);
    console.log(id)
    const {loading, error, data} = useQuery(GET_ARTIST, {
        variables: {id: id}
    });
    if (loading) return 'loading...'
    console.log('Contacts', data)
    if (error) return `Error! ${error.message}`

    const {firstName, lastName} = data.getArtist;

    return (
        <div className='container'>
            <Content className='App'>
                <ArtistDetail id={id} firstName={firstName} lastName={lastName} key={id}/>
            </Content>
        </div>

    )
}

export default ArtistDetailContainer