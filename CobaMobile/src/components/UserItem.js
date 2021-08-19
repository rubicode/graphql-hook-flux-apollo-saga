import * as React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { useDispatch } from 'react-redux'

import { resendUser, removeUser } from '../actions/users'

export default function UserItem(props) {
    const dispatch = useDispatch();

    const resend = () => dispatch(resendUser(props.username, props.name, props.age))
    const remove = () => dispatch(removeUser(props.username))

    return (
        <View style={styles.item}>
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.nameAge}>{props.name}-{props.age}</Text>
            {!props.sent && <Text style={styles.networkError}>network failed</Text>}
            <TouchableOpacity onPress={props.sent ? props.remove : props.resend}>
                <Text style={{ color: "red" }}>{props.sent ? 'delete' : 'resend'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    networkError: {
        color: "red",
        fontSize: 8
    },
    username: {
        color: "green",
        fontSize: 16
    },
    nameAge: {
        fontSize: 14
    },
    item: {
        padding: 10,
        height: 100,
    }
});