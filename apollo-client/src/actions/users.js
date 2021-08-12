import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import {
    DRAW_LOAD_USER,
    FAILED_LOAD_USER,
    DRAW_ADD_USER,
    SUCCESS_ADD_USER,
    FAILED_ADD_USER,
    SUCCESS_RESEND_USER,
    FAILED_RESEND_USER
} from '../constants'

const API_URL = 'http://localhost:3000/graphql'

const request = new ApolloClient({
    uri: API_URL
});


const drawLoadUser = (users) => ({
    type: DRAW_LOAD_USER,
    users
})

const failedLoadUser = () => ({
    type: FAILED_LOAD_USER
})

export const loadUser = () => {
    const usersQuery = gql`
        query {
            users{
            userName
            Name
            Age
            }
        }`;
    return dispatch => {
        return request.query({
            query: usersQuery,
        })
            .then(response => {
                dispatch(drawLoadUser(response.data.users))
            }).catch(() => {
                dispatch(failedLoadUser())
            })
    }
}

const drawAddUser = (username, name, age) => ({
    type: DRAW_ADD_USER,
    username, name, age
})

const successAddUser = () => ({
    type: SUCCESS_ADD_USER
})

const failedAddUser = (username) => ({
    type: FAILED_ADD_USER,
    username
})

export const addUser = (username, name, age) => {
    const addQuery = gql`
        mutation addUser($userName: String!, $Name: String!, $Age: String!) {
            addUser(userName: $userName, Name: $Name, Age: $Age) {
            userName
            Name
            Age
            }
        }`;
    return dispatch => {
        dispatch(drawAddUser(username, name, age))
        return request.mutate({
            mutation: addQuery,
            variables: {
                userName: username,
                Name: name,
                Age: age
            }
        })
            .then(function (response) {
                dispatch(successAddUser())
            })
            .catch(function (error) {
                console.error(error);
                dispatch(failedAddUser(username))
            });
    }
}

const successResendUser = (username) => ({
    type: SUCCESS_RESEND_USER,
    username
})

const failedResendUser = () => ({
    type: FAILED_RESEND_USER
})

export const resendUser = (username, name, age) => dispatch => {
    return request.post('api', { username, name, age })
        .then(function (response) {
            dispatch(successResendUser(username))
        })
        .catch(function (error) {
            console.error(error);
            dispatch(failedResendUser())
        });
}



