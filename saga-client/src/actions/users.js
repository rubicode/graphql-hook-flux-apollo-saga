import {
    DRAW_LOAD_USER,
    FAILED_LOAD_USER,
    DRAW_ADD_USER,
    SUCCESS_ADD_USER,
    FAILED_ADD_USER,
    SUCCESS_RESEND_USER,
    FAILED_RESEND_USER
} from '../constants'

import axios from 'axios'

const API_URL = 'http://localhost:3000/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});


const drawLoadUser = (users) => ({
    type: DRAW_LOAD_USER,
    users
})

const failedLoadUser = () => ({
    type: FAILED_LOAD_USER
})

export const loadUser = () => {
    return dispatch => {
        return request.get('api').then(users => {
            dispatch(drawLoadUser(users.data))
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
    return dispatch => {
        dispatch(drawAddUser(username, name, age))
        return request.post('api', { username, name, age })
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



