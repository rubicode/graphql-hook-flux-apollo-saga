import {
    DRAW_LOAD_USER,
    DRAW_ADD_USER,
    FAILED_ADD_USER,
    SUCCESS_RESEND_USER,
    FAILED_LOAD_USER,
    FAILED_REMOVE_USER,
    SUCCESS_REMOVE_USER,
    SUCCESS_ADD_USER
} from '../constants'

const users = (state = [], action) => {
    switch (action.type) {
        case DRAW_LOAD_USER:
            return action.users.map((item) => {
                return {
                    username: item.userName,
                    name: item.Name,
                    age: item.Age,
                    sent: true
                }
            })

        case DRAW_ADD_USER:
            return [
                ...state,
                {
                    username: action.username,
                    name: action.name,
                    age: action.age,
                    sent: true
                }
            ]

        case FAILED_ADD_USER:
            return state.map((item) => {
                if (item.username === action.username) {
                    item.sent = false;
                }
                return item
            })

            case SUCCESS_REMOVE_USER:
                return state.filter(item => item.username !== action.username)

        case SUCCESS_RESEND_USER:
            return state.map((item) => {
                if (item.username === action.username) {
                    item.sent = true;
                }
                return item
            })

        case FAILED_LOAD_USER:
        case SUCCESS_ADD_USER:
            case FAILED_REMOVE_USER:
        default:
            return state
    }
}

export default users