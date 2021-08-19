import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import UserItem from './UserItem'
import { loadUser } from '../actions/users'


export default function UserList(props) {

    const { users } = useSelector(state => ({
        users: state.users,
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserItem {...item} key={item.username} />}
                keyExtractor={item => item.username}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
})