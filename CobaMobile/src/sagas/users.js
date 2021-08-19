import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/users';
import axios from 'axios'

import { ADD_USER, LOAD_USER, REMOVE_USER, RESEND_USER } from '../constants'

const API_URL = 'http://192.168.1.7:3000/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 10000
});

const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });


const add = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const update = async (path, params) =>
    await request.put(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        });

const remove = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });


const PATH = 'api';

// load
function* loadUser() {
    try {
        const data = yield call(read, PATH);
        yield put(actions.drawLoadUser(data));
    } catch (error) {
        console.log(error);
        yield put(actions.failedLoadUser());
    }
}

function* addUser(payload) {
    const { username, name, age } = payload;
    yield put(actions.drawAddUser(username, name, age))
    try {
        const data = yield call(add, PATH, { username, name, age });
        yield put(actions.successAddUser(data));
    } catch (error) {
        console.log(error);
        yield put(actions.failedAddUser(username));
    }
}

function* removeUser(payload) {
    const { username } = payload;
    try {
        const data = yield call(remove, `${PATH}/${username}`);
        yield put(actions.successRemoveUser(username));
    } catch (error) {
        console.log(error);
        yield put(actions.failedRemoveUser());
    }
}

function* resendUser(payload) {
    const { username, name, age } = payload;
    try {
        const data = yield call(add, PATH, { username, name, age });
        yield put(actions.successResendUser(username, name, age));
    } catch (error) {
        console.log(error);
        yield put(actions.failedResendUser());
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_USER, loadUser),
        takeEvery(ADD_USER, addUser),
        takeEvery(REMOVE_USER, removeUser),
        takeEvery(RESEND_USER, resendUser),
    ]);
}


