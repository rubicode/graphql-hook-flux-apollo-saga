import {
    DRAW_LOAD_USER,
    FAILED_LOAD_USER,
    DRAW_ADD_USER,
    SUCCESS_ADD_USER,
    FAILED_ADD_USER,
    SUCCESS_RESEND_USER,
    FAILED_RESEND_USER,
    LOAD_USER,
    ADD_USER,
    REMOVE_USER,
    FAILED_REMOVE_USER,
    SUCCESS_REMOVE_USER,
    RESEND_USER
} from '../constants'


export const drawLoadUser = (users) => ({
    type: DRAW_LOAD_USER,
    users
})

export const failedLoadUser = () => ({
    type: FAILED_LOAD_USER
})

export const loadUser = () => ({
    type: LOAD_USER
})

export const drawAddUser = (username, name, age) => ({
    type: DRAW_ADD_USER,
    username, name, age
})

export const successAddUser = () => ({
    type: SUCCESS_ADD_USER
})

export const failedAddUser = (username) => ({
    type: FAILED_ADD_USER,
    username
})

export const addUser = (username, name, age) => ({
    type: ADD_USER,
    username,
    name,
    age
})

export const successRemoveUser = (username) => ({
    type: SUCCESS_REMOVE_USER,
    username
})

export const failedRemoveUser = () => ({
    type: FAILED_REMOVE_USER
})

export const removeUser = (username) => ({
    type: REMOVE_USER,
    username
})

export const successResendUser = (username) => ({
    type: SUCCESS_RESEND_USER,
    username
})

export const failedResendUser = () => ({
    type: FAILED_RESEND_USER
})

export const resendUser = (username, name, age) => ({
    type: RESEND_USER,
    username,
    name,
    age
})



